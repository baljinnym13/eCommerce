import { Router } from "express";
import {
  createSaveCart,
  getSaveData,
  deleteProduct,
} from "../controllers/save-controller";
import { authentication } from "../middlewares/authentication";

const router = Router();

router
  .route("/product")
  .post(authentication, createSaveCart)
  .get(authentication, getSaveData);
router
  .route("/product/delete/:product_id")
  .delete(authentication, deleteProduct);

export default router;
