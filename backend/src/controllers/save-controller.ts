import { Request, Response } from "express";
import SaveProduct from "../models/saveProduct.model";
import User from "../models/user.model";
export const createSaveCart = async (req: Request, res: Response) => {
  const { id } = req.user;
  const { product_id } = req.body;
  console.log(id, product_id);
  try {
    const findSave = await SaveProduct.findOne({ user_id: id });

    if (!findSave) {
      const data = SaveProduct.create({
        user_id: id,
        products_id: { product_id },
      });

      return res.status(200).json({ message: "created new cart", data });
    }
    const findDuplicated = findSave.products_id.findIndex(
      (item) => item.product_id.toString() === product_id
    );

    if (findDuplicated > -1) {
      res.status(201).json({ message: "хадгалсан бараа байна" });
      return;
    } else {
      findSave.products_id.push({ product_id });
    }
    const updatedData = await findSave.save();
    res.status(200).json({
      message: "updated cart",
      updatedData,
    });
  } catch (error) {
    res.status(400).json({ error });
  }
};
export const getSaveData = async (req: Request, res: Response) => {
  const { id } = req.user;
  console.log("id", id);
  try {
    const data = await SaveProduct.findOne({ user_id: id }).populate(
      "products_id.product_id"
    );

    if (!data) {
      return res.status(400).json({ message: " baraa oldsongui" });
    }
    const proArr = data.products_id;
    res.status(200).json({ message: "success", proArr });
  } catch (error) {
    console.error(error);
  }
};
export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.user;
  const { product_id } = req.params;
  console.log(id, product_id);
  try {
    const data = await SaveProduct.findOne({ user_id: id });

    if (!data) {
      return res.status(400).json({ message: " user oldsongui" });
    }
    console.log("data", data);
    const deleteData = data.products_id.findIndex(
      (item) => item.product_id.toString() === product_id.toString()
    );
    console.log("deleted data", deleteData);
    if (deleteData > -1) {
      const deleted = data.products_id.splice(deleteData, 1);
      console.log(deleted);
      await data.save();
      res.status(200).json({ messege: "success" });
    }
  } catch (error) {
    console.error(error);
  }
};
