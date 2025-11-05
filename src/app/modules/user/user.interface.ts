import { Types } from "mongoose";

export type TUser = {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  imageUrl?: string;
  phone?: string;
  title?: string;
  bio?: string;
  location?: string;
};
