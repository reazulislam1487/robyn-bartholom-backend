import { Account_Model } from "../modules/auth/auth.schema";
import { TUser } from "../modules/user/user.interface";
import { User_Model } from "../modules/user/user.schema";
import { AppError } from "./app_error";
import httpStatus from "http-status";

export const isAccountExist = async (email: string) => {
  const user = User_Model.findOne({ email });
  if (!user) {
    throw new AppError("Account not found!!", httpStatus.NOT_FOUND);
  }
  return user;
};
