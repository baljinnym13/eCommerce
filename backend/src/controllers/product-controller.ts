import { Request, Response } from "express";
import Product from "../models/product.model";

export const createProduct = async (req: Request, res: Response) => {
  const { name, price, description, size, quantity, category } = req.body;
  try {
    const user = await Product.create({
      name,
      price,
      description,
      size,
      quantity,
      category,
    });

    res.status(200).json({ message: "success" });
  } catch (error) {
    res.status(401).json({ message: "aldaa garlaa", error });
  }
};
export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find({}).populate("category");
    res.status(200).json({ message: "success to get all product", products });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "failed to get all product" });
  }
};

export const getProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;
  try {
    const product = await Product.findById({ _id: productId });
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "failed to get product" });
  }
};
