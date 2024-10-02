import { Router } from "express";
import {
  login,
  signup,
  forgetPass,
  currentUser,
  verifyOtp,
  verifyPass,
} from "../controllers/auth-controller";
import { getUser } from "../controllers/user-controller";
import { authentication } from "../middlewares/authentication";

const router = Router();

router.route("/login").post(login);
router.route("/signup").post(signup);
router.route("/forgeyPass").post(forgetPass);
router.route("/verifyOtp").post(verifyOtp);
router.route("/newPass").post(verifyPass);
router.route("/profile").get(authentication, currentUser);
router.route("/user").get(getUser);

export default router;
