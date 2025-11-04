import { Schema, model } from "mongoose";
import { T_Reviews } from "./reviews.interface";

const reviews_schema = new Schema<T_Reviews>({
    userId: { type: String, required: false },   
    productId: { type: String, required: false },
    comment: { type: String, required: false },
    createdAt: { type: Date, default: Date.now },
});

export const reviews_model = model("reviews", reviews_schema);
