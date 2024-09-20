// mongoose => odm =. object data mapping

import { Request, Response } from "express";
import User from "../models/user.model";

export const Login = async (req: Request, res: Response) => {
  res.status(200).json({ message: "login success" });
};
export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.status(400).json({ message: "hooson utga baij bolohgvi" });
    }

    const createdUser = await User.create({
      name,
      email,
      password,
      phoneNumber: "",
    });
    res.status(201).json({ message: "login success", user: createdUser });
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
