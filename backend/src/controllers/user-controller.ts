import { Request, Response } from "express";
import User from "../models/user.model";

export const getUser = async (req: Request, res: Response) => {
  try {
    const users = await User.find({});
    res.status(200).json({ message: "success", user: users });
  } catch (error) {
    console.log("error", error);
  }
  //   const { name, email, password } = req.body;
  //   if (!name || !email || !password) {
  //     res.status(400).json({ message: "hooson utga baij bolohgvi" });
  //   }

  //   const createdUser = await User.create({
  //     name,
  //     email,
  //     password,
  //     phoneNumber: "",
  //   });
  //   res.status(201).json({ message: "login success", user: createdUser });
};
