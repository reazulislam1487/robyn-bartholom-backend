import { Router } from "express";
import { auth_controllers } from "./auth.controller";
import RequestValidator from "../../middlewares/request_validator";
import { auth_validation } from "./auth.validation";
import auth from "../../middlewares/auth";

const authRoute = Router();

authRoute.post(
  "/register",
  RequestValidator(auth_validation.register_validation),
  auth_controllers.register_user
);
// Login route
authRoute.post(
  "/login",
  RequestValidator(auth_validation.login_validation),
  auth_controllers.login_user
);

authRoute.get("/me", auth("ADMIN", "USER"), auth_controllers.get_my_profile);

// change password route
authRoute.post(
  "/change-password",
  auth("ADMIN", "USER"),
  RequestValidator(auth_validation.changePassword),
  auth_controllers.change_password
);
export default authRoute;
