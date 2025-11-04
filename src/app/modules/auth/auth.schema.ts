import { model, Schema } from "mongoose";
import { TAccount } from "./auth.interface";

const authSchema = new Schema<TAccount>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  imageUrl: { type: String },
  lastPasswordChange: { type: String },
});

export const Account_Model = model("account", authSchema);
