import { Router } from "express";
import { Login, signup } from "../controllers/auth-controller";
import { getUser } from "../controllers/user-controller";

const router = Router();

router.route("/login").post(Login);
router.route("/signup").post(signup);
router.route("/user").get(getUser);

export default router;
