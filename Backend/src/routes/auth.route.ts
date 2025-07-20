import express from "express";
import {
  appleLoginController,
  createProfileController,
  deleteAccount,
  getUserProfileController,
  googleLoginController,
  loginController,
  signupController,
  updateProfileController,
  verifyOTPController,
} from "../controllers/auth.controller";
import { verifySessionToken, verifyTempToken } from "../middlewares/auth.middleware";

const authRouter = express.Router();

authRouter.post("/login", loginController);
authRouter.post("/signup", signupController);
authRouter.post("/verify-otp", verifyOTPController);
authRouter.post("/apple-login", appleLoginController);
authRouter.post("/google-login", googleLoginController);
authRouter.post("/create-profile", verifyTempToken , createProfileController);
authRouter.delete("/delete-account", verifySessionToken ,deleteAccount);
authRouter.put("/update-profile",verifySessionToken,updateProfileController)
authRouter.get("/get-user-profile",  verifySessionToken, getUserProfileController);

export default authRouter;
