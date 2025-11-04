import { Router } from "express";
import RequestValidator from "../../middlewares/request_validator";
import { reviews_controller } from "./reviews.controller";
import { reviews_validations } from "./reviews.validation";

const reviews_router = Router();

reviews_router.post(
  "/create",
  RequestValidator(reviews_validations.create),
  reviews_controller.create_new_reviews
);
reviews_router.get(
  "/",
  reviews_controller.get_all_reviews
);

export default reviews_router;
