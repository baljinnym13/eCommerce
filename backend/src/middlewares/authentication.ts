import { Request, Response, NextFunction } from "express";
import { decodeToken } from "../utils/jwt";
// interface IMyRequest extends Request {
//   user: String | object;
// }

declare global {
  namespace Express {
    interface Request {
      user: any;
    }
  }
}

export const authentication = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.headers.authorization) {
    return res
      .status(401)
      .json({ message: "Та энэ үйлдлийг хийхийн тулд нэвтэрнэ үү" });
  }
  try {
    const token = req.headers.authorization?.split(" ")[1];
    const user = decodeToken(token);
    if (!user) {
      return res.status(401).json({ message: "Хүчингүй токен" });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Токен алдаатай байна", error });
  }
};
