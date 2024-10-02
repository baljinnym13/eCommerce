// mongoose => odm =. object data mapping

import { Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendemail } from "../utils/send-email";
import crypto from "crypto";
import { generateToken } from "../utils/jwt";

export const login = async (req: Request, res: Response) => {
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
        const token = generateToken({ id: user.id });
        const { firstname, profile_img, email } = user;
        res.status(201).json({
          message: "success",
          token,
          user: { firstname, profile_img, email },
        });
      }
    }
  } catch (error) {
    res.status(401).json({ message: error });
  }
};
export const currentUser = async (req: Request, res: Response) => {
  const { id } = req.user;
  const findUser = await User.findById(id);
  res.status(200).json({ user: findUser, message: "success" });
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
    const { email } = req.body;

    const finduser = await User.findOne({ email: email });
    if (!finduser) {
      return res.status(404).json({ message: "hereglegch oldsongv" });
    }
    const otp = Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, "0");
    finduser.otp = otp;
    await finduser?.save();
    await sendemail(email, otp);
    res.status(200).json({ message: "send email success" });
  } catch (error) {
    res.status(401).json({ message: error });
  }
};
export const verifyOtp = async (req: Request, res: Response) => {
  try {
    const { email, otpValue } = req.body;
    console.log("email", email, otpValue);

    const finduser = await User.findOne({ email: email, otp: otpValue });
    console.log("finduser", finduser);
    if (!finduser) {
      return res.status(404).json({ message: "hereglegch oldsongv" });
    }

    const resetToken = crypto.randomBytes(25).toString("hex");
    console.log("resettoken", resetToken);
    const hashedResetToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
    finduser.passwordResetToken = hashedResetToken;
    finduser.passwordResetTokenExpire = new Date(Date.now() + 10 * 60 * 1000);
    await finduser?.save();
    await sendemail(
      email,
      `<a href="http://localhost:3000/newPass?resetToken=${resetToken}">huuts vg sergeeh holboos</a>`
    );
    res.status(200).json({ message: "send email success" });
  } catch (error) {
    res.status(401).json({ message: error });
  }
};
export const verifyPass = async (req: Request, res: Response) => {
  try {
    const { password, resetToken } = req.body;
    const hashedResetToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
    const finduser = await User.findOne({
      passwordResetToken: hashedResetToken,
      passwordResetTokenExpire: { $gt: Date.now() },
    });
    if (!finduser) {
      return res.status(400).json({ message: "hugtsaa duuslaa" });
    }
    finduser.password = password;
    await finduser?.save();
    res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: error });
  }
};
