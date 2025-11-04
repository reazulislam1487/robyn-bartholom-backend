import { Router } from "express";
import RequestValidator from "../../middlewares/request_validator";
import { blog_controller } from "./blog.controller";
import { blog_validations } from "./blog.validation";

const blog_router = Router();

blog_router.post(
  "/create",
  RequestValidator(blog_validations.create),
  blog_controller.create_new_blog
);

blog_router.get(
  "/",
  blog_controller.get_all_blog
);

export default blog_router;
