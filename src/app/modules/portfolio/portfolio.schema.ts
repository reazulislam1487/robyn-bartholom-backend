import { Schema, model } from "mongoose";
import { T_Portfolio } from "./portfolio.interface";

const portfolio_schema = new Schema<T_Portfolio>({
    title: { type: String, required: true },
    network: { type: String, required: true },
    year: { type: Number, required: true },
    role: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: false },
});

export const portfolio_model = model("portfolio", portfolio_schema);
