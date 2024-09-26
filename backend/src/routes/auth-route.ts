import { Router } from "express";
import {
  Login,
  signup,
  forgetPass,
  currentUser,
  verifyOtp,
  verifyPass,
} from "../controllers/auth-controller";
import { getUser } from "../controllers/user-controller";
import { authentication } from "../middlewares/authentication";

const router = Router();

router.route("/login").post(Login);
router.route("/signup").post(signup);
router.route("/forgeyPass").post(forgetPass);
router.route("/verifyOtp").post(verifyOtp);
router.route("/newPass").post(verifyPass);
router.route("/current-user").post(authentication, currentUser);
router.route("/user").get(getUser);

export default router;
