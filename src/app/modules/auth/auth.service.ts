import { AppError } from "../../utils/app_error";
import { TAccount, TLoginPayload } from "./auth.interface";
import { Account_Model } from "./auth.schema";
import httpStatus from "http-status";
import bcrypt from "bcrypt";
import { TUser } from "../user/user.interface";
import { User_Model } from "../user/user.schema";
import mongoose from "mongoose";
import { jwtHelpers } from "../../utils/JWT";
import { configs } from "../../configs";
import { JwtPayload, Secret } from "jsonwebtoken";
import sendMail from "../../utils/mail_sender";
import { isAccountExist } from "../../utils/isAccountExist";

export const login_user_from_db = async (payload: TLoginPayload) => {
  // 1. find user by email
  const user = await User_Model.findOne({
    email: payload.email,
  }).exec();

  // 2. if no user -> generic error
  if (!user) {
    throw new Error("Invalid email or password");
  }

  // 3. compare hashed password using bcrypt
  const isMatch = await bcrypt.compare(
    String(payload.password),
    String(user.password)
  );

  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

  // 4. remove password before returning
  const userObj = user.toObject ? user.toObject() : { ...user };
  delete (userObj as any).password;

  // 5. success response
  return {
    message: "Login successful ✅",
    user: userObj,
  };
};

const get_my_profile_from_db = async (email: string) => {
  const isExistAccount = await isAccountExist(email);
  const accountProfile = await User_Model.findOne({
    accountId: isExistAccount._id,
  });
  isExistAccount.password = "";
  return {
    account: isExistAccount,
    profile: accountProfile,
  };
};

const refresh_token_from_db = async (token: string) => {
  let decodedData;
  try {
    decodedData = jwtHelpers.verifyToken(
      token,
      configs.jwt.refresh_token as Secret
    );
  } catch (err) {
    throw new Error("You are not authorized!");
  }

  const userData = await Account_Model.findOne({
    email: decodedData.email,
    status: "ACTIVE",
    isDeleted: false,
  });

  const accessToken = jwtHelpers.generateToken(
    {
      email: userData!.email,
      role: userData!.role,
    },
    configs.jwt.access_token as Secret,
    configs.jwt.access_expires as string
  );

  return accessToken;
};

const change_password_from_db = async (
  user: JwtPayload,
  payload: {
    oldPassword: string;
    newPassword: string;
  }
) => {
  const isExistAccount = await isAccountExist(user?.email);

  const isCorrectPassword: boolean = await bcrypt.compare(
    payload.oldPassword,
    isExistAccount.password
  );

  if (!isCorrectPassword) {
    throw new AppError("Old password is incorrect", httpStatus.UNAUTHORIZED);
  }

  const hashedPassword: string = await bcrypt.hash(payload.newPassword, 10);
  await Account_Model.findOneAndUpdate(
    { email: isExistAccount.email },
    {
      password: hashedPassword,
      lastPasswordChange: Date(),
    }
  );
  return "Password changed successful.";
};

export const auth_services = {
  login_user_from_db,
  get_my_profile_from_db,
  refresh_token_from_db,
  change_password_from_db,
};
