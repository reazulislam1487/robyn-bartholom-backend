import { AppError } from "../../utils/app_error";
import { TLoginPayload } from "./auth.interface";
import { Account_Model } from "./auth.schema";
import httpStatus from "http-status";
import bcrypt from "bcrypt";
import { User_Model } from "../user/user.schema";
import { JwtPayload, Secret } from "jsonwebtoken";
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
    message: "Login successful ",
    user: userObj,
  };
};

// change password
const change_password_from_db2 = async (
  user: JwtPayload,
  payload: {
    oldPassword: string;
    newPassword: string;
    confirmNewPassword: string;
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
export const change_password_from_db = async (payload: {
  email: string;
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}) => {
  // 1. find user
  const user = await User_Model.findOne({ email: payload.email }).exec();

  if (!user) {
    throw new Error("User not found");
  }

  // 2. verify old password
  const isMatch = await bcrypt.compare(payload.oldPassword, user.password);
  if (!isMatch) {
    throw new Error("Old password is incorrect");
  }

  // 3. confirm new passwords match
  if (payload.newPassword !== payload.confirmNewPassword) {
    throw new Error("New passwords do not match");
  }

  // 4. hash the new password
  const hashedPassword = await bcrypt.hash(payload.newPassword, 10);

  // 5. update password in DB
  user.password = hashedPassword;
  await user.save();

  // 6. return success message
  return {
    message: "Password changed successfully ✅",
  };
};

// get profile data
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
export const auth_services = {
  login_user_from_db,
  get_my_profile_from_db,
  change_password_from_db,
};
