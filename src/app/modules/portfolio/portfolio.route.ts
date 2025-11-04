import { Router } from "express";
import RequestValidator from "../../middlewares/request_validator";
import { portfolio_controller } from "./portfolio.controller";
import { portfolio_validations } from "./portfolio.validation";

const portfolio_router = Router();
// create new portfolio
portfolio_router.post(
  "/create",
  RequestValidator(portfolio_validations.create),
  portfolio_controller.create_new_portfolio
);
// get all portfolios
portfolio_router.get(
  "/",
  portfolio_controller.get_all_portfolio
);
// get 4 portfolios
portfolio_router.get(
  "/four-portfolios",
  portfolio_controller.get_four_portfolio
);



export default portfolio_router;
