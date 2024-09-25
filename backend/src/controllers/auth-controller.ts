// mongoose => odm =. object data mapping

import { Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const Login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    console.log("first", email);
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({ message: "hereglegch oldsongv" });
    } else {
      const ischeck = bcrypt.compareSync(password, user.password.toString());
      if (!ischeck) {
        res.status(400).json({ message: "email or password buruu baina" });
      } else {
        const token = jwt.sign({ id: user.id }, "JWT_TOKEN_PASS@123", {
          expiresIn: "10h",
        });
        res.status(201).json({
          message: "success",
          token,
          user,
        });
      }
    }
  } catch (error) {
    res.status(401).json({ message: error });
  }
};
export const signup = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    if (!firstname || !lastname || !email || !password) {
      return res.status(400).json({ message: "hooson utga baij bolohgvi" });
    }
    console.log("first", firstname, lastname, email, password);

    const createdUser = await User.create({
      firstname,
      lastname,
      email,
      password,
      address: "",
    });
    res.status(201).json({ message: "create user is successfull" });
  } catch (error) {
    res.status(500).json({ message: " server error", error: error });
  }
};

export const forgetPass = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    console.log("first", email);
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({ message: "hereglegch oldsongv" });
    } else {
      const ischeck = bcrypt.compareSync(password, user.password.toString());
      if (!ischeck) {
        res.status(400).json({ message: "email or password buruu baina" });
      } else {
        const token = jwt.sign({ id: user.id }, "JWT_TOKEN_PASS@123", {
          expiresIn: "10h",
        });
        res.status(201).json({
          message: "success",
          token,
          user,
          // optmail(email)
        });
      }
    }
  } catch (error) {
    res.status(401).json({ message: error });
  }
};
