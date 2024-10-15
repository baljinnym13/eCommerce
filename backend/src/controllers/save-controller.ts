import { Request, Response } from "express";
import SaveProduct from "../models/saveProduct.model";
export const createSaveCart = (req: Request, res: Response) => {
  const { id } = req.user;
  const { product_id } = req.body;
  try {
    const findSave = SaveProduct.findOne({ user_id: id });
    if (!findSave) {
      const data = SaveProduct.create({ user_id: id, products_id: product_id });
      return res.status(200).json({ message: "created new cart", data });
    }
  } catch (error) {}
};
