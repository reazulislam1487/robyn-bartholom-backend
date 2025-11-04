import catchAsync from "../../utils/catch_async";
import manageResponse from "../../utils/manage_response";
import httpStatus from "http-status";
import { portfolio_service } from "./portfolio.service";

const create_new_portfolio = catchAsync(async (req, res) => {
  const result = await portfolio_service.create_new_portfolio_into_db(req.body);
  manageResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "New portfolio created successfully!",
    data: result,
  });
});

const get_all_portfolio = catchAsync(async (req, res) => {
  const result = await portfolio_service.get_all_portfolios_from_db();
  manageResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Get all portfolio successfully!",
    data: result,
  });
});

export const portfolio_controller = { create_new_portfolio,get_all_portfolio };
