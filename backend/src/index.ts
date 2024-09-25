// import { Resend } from "resend";
import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import authRoute from "./routes/auth-route";
import { connectDB } from "./config/db";
import { sendemail } from "./utils/send-email";
const PORT = process.env.PORT || "";
const MONGO_URI = process.env.MONGO_URI || "";

//express app object vvsgeh
const app = express();
// const resend = new Resend(process.env.RESEND_API_KEY);

// middlewares
app.use(cors());
app.use(express.json());
app.use("/api/v1/auth", authRoute);

app.get("/", async (req: Request, res: Response) => {
  const rndOtp = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0");
  sendemail("baljinnym1318@gmail.com", rndOtp);
  //   const { data, error } = await resend.emails.send({
  //     from: "Acme <onboarding@resend.dev>",
  //     to: ["baljinnym1318@gmail.com"],
  //     subject: "hello world",
  //     html: generateHtmlTemplate(rndOtp),
  //   });
  //   if (error) {
  //     console.error("EMAIL_ERR", { error });
  //   }
  //   res.send("wellcome ecommerce api server");
});
connectDB(MONGO_URI);

//server asaah
app.listen(PORT, () => {
  console.log(`server localhost: ${PORT}  deer aslaa !!!.`);
});
