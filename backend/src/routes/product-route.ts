import { Router } from "express";
import {
  createProduct,
  getProduct,
  getProducts,
  getRelProducts,
  getHeroProduct,
} from "../controllers/product-controller";

const router = Router();

router.route("/").post(createProduct);
router.route("/").get(getProducts);
router.route("/hero").get(getHeroProduct);
router.route("/:productId").get(getProduct);
router.route("/related/:categoryId").get(getRelProducts);

export default router;
