import catchAsync from "../../utils/catch_async";
import manageResponse from "../../utils/manage_response";
import httpStatus from "http-status";
import { blog_service } from "./blog.service";
// create new blog
const create_new_blog = catchAsync(async (req, res) => {
  const result = await blog_service.create_new_blog_into_db(req.body);
  manageResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "New blog created successfully!",
    data: result,
  });
});
// Get all blogs
const get_all_blog = catchAsync(async (req, res) => {
  const result = await blog_service.get_all_blogs_from_db();
  manageResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Get all blogs successfully!",
    data: result,
  });
});


export const blog_controller = { create_new_blog,get_all_blog };
