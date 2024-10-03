import { Router } from "express";
import { createProduct, getProduct } from "../controllers/product-controller";

const router = Router();

router.route("/").post(createProduct);
router.route("/").get(getProduct);

export default router;
