import { Request, Response } from "express";
import Product from "../models/product.model";

export const createProduct = async (req: Request, res: Response) => {
  const { name, descreption } = req.body;
  try {
    if (!name || !descreption) {
      return res.status(400).json({ message: " Хоосон утга байж болохгүй" });
    }
    const user = await Product.create({ name, descreption });
    console.log("category", name);

    res.status(200).json({ message: "success" });
  } catch (error) {
    res.status(401).json({ error });
  }
};
export const getProduct = async (req: Request, res: Response) => {
  try {
    const products = await Product.find({}).populate("category");
    res.status(200).json({ message: "success to get all product", products });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "failed to get all product" });
  }
};
