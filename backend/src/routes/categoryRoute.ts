import { Router } from "express";
import { createCategory } from "../controllers/category_controller";

const router = Router();

router.route("/category").post(createCategory);

export default router;
