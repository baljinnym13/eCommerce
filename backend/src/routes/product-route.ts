import { Router } from "express";
import {
  createProduct,
  getProduct,
  getProducts,
  getRelProducts,
} from "../controllers/product-controller";

const router = Router();

router.route("/").post(createProduct);
router.route("/").get(getProducts);
router.route("/:productId").get(getProduct);
router.route("/related/:categoryId").get(getRelProducts);

export default router;
