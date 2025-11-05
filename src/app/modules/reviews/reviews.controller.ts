import catchAsync from "../../utils/catch_async";
import manageResponse from "../../utils/manage_response";
import httpStatus from "http-status";
import { reviews_service } from "./reviews.service";

const create_new_reviews = catchAsync(async (req, res) => {
  const result = await reviews_service.create_new_reviews_into_db(req.body);
  // console.log("New reviews created:", result);
  manageResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "New reviews created successfully!",
    data: result,
  });
});
const get_all_reviews = catchAsync(async (req, res) => {
  const result = await reviews_service.get_all_reviews_from_db();
  // console.log("Get all Reviews:", result);
  manageResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All Reviews successfully get !",
    data: result,
  });
  
});


export const reviews_controller = { create_new_reviews, get_all_reviews };
