import catchAsync from "../../utils/catch_async";
import manageResponse from "../../utils/manage_response";
import httpStatus from "http-status";
import { portfolio_service } from "./portfolio.service";

// create new portfolio
const create_new_portfolio = catchAsync(async (req, res) => {
  const result = await portfolio_service.create_new_portfolio_into_db(req.body);
  manageResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "New portfolio created successfully!",
    data: result,
  });
});

// Get all portfolios
const get_all_portfolio = catchAsync(async (req, res) => {
  const result = await portfolio_service.get_all_portfolios_from_db();
  manageResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Get all portfolios successfully!",
    data: result,
  });
  
});

// get 4 portfolio
const get_four_portfolio = catchAsync(async (req, res) => {
  const result = await portfolio_service.get_four_portfolios_from_db();
  manageResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Get only 4 portfolios successfully!",
    data: result,
  });
  
});

export const portfolio_controller = { create_new_portfolio,get_all_portfolio,get_four_portfolio };
