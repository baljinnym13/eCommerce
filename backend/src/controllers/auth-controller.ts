import { Request, Response } from "express";
export const login = async (req: Request, res: Response) => {
  res.status(200).json({ message: "success" });
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
