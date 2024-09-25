import { Router } from "express";
import { Login, signup, forgetPass } from "../controllers/auth-controller";
import { getUser } from "../controllers/user-controller";

const router = Router();

router.route("/login").post(Login);
router.route("/signup").post(signup);
router.route("/forgeyPass").post(forgetPass);
router.route("/user").get(getUser);

export default router;
