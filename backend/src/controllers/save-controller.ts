import { Request, Response } from "express";
import SaveProduct from "../models/saveProduct.model";
export const createSaveCart = async (req: Request, res: Response) => {
  const { id } = req.user;
  const { product_id } = req.body;
  console.log(id, product_id);
  try {
    const findSave = await SaveProduct.findOne({ user_id: id });
    console.log(findSave);
    if (!findSave) {
      const data = SaveProduct.create({
        user_id: id,
        products_id: { product_id },
      });
      console.log("ok", data);

      return res.status(200).json({ message: "created new cart", data });
    }
  } catch (error) {
    console.error(error);
  }
};
