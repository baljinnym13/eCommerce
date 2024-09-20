import express, { Request, Response } from "express";

import dotenv from "dotenv";

dotenv.config();

import authRoute from "./routes/auth-route";
import { connectDB } from "./config/db";
const PORT = process.env.PORT || "";
const MONGO_URI = process.env.MONGO_URI || "";

//express app object vvsgeh
const app = express();

// middlewares
app.use(express.json());
app.use("/api/v1/auth", authRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("wellcome ecommerce api server");
});
connectDB(MONGO_URI);

//server asaah
app.listen(PORT, () => {
  console.log(`server localhost: ${PORT}  deer aslaa !!!.`);
});
