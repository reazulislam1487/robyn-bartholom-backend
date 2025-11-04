import { Router } from "express";
import RequestValidator from "../../middlewares/request_validator";
import { portfolio_controller } from "./portfolio.controller";
import { portfolio_validations } from "./portfolio.validation";

const portfolio_router = Router();

portfolio_router.post(
  "/create",
  RequestValidator(portfolio_validations.create),
  portfolio_controller.create_new_portfolio
);
portfolio_router.get(
  "/",
  portfolio_controller.get_all_portfolio
);

export default portfolio_router;
