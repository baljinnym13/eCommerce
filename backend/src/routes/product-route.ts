import { Router } from "express";
import {
  createProduct,
  getProduct,
  getProducts,
} from "../controllers/product-controller";

const router = Router();

router.route("/").post(createProduct);
router.route("/").get(getProducts);
router.route("/:productId").get(getProduct);

export default router;
