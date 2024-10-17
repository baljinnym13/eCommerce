import { Router } from "express";
import { createSaveCart } from "../controllers/save-controller";
import { authentication } from "../middlewares/authentication";

const router = Router();

router.route("/product").post(authentication, createSaveCart);

export default router;
