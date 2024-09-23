// mongoose => odm =. object data mapping

import { Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from "bcrypt";

export const Login = async (req: Request, res: Response) => {
  res.status(200).json({ message: "login success" });
};
export const signup = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, email, password, address } = req.body;

    if (!firstname || !lastname || !email || !password || !address) {
      return res.status(400).json({ message: "hooson utga baij bolohgvi" });
    }

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

// const signUp = async (req, res) => {
//     try {
//       const { email, name, password } = req.body;
//       const hashedPassword = bcrypt.hashSync(password, 10);
//       const data = await sql`
//     INSERT INTO users(email, name, password, profile_img)
//     VALUES(${email}, ${name}, ${hashedPassword}, 'url');
//     `;
//       console.log("DATA", data);
//       res.status(201).json({ message: "New user registered successfully" });
//     } catch (error) {
//       res.status(401).json({ message: error });
//     }
//   };
