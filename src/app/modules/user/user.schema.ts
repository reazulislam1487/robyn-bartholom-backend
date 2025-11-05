import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";

const user_schema = new Schema<TUser>({
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  imageUrl: { type: String, required: false },
  location: { type: String },
  phone: { type: String, required: false },
  password: { type: String, required: true },
});

export const User_Model = model("user", user_schema);
