import nodemailer from "nodemailer";
import generateHtmlTemplate from "./generateHtmlTemplate";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for port 465, false for other ports
  auth: {
    user: "baljinnym1318@gmail.com",
    pass: "tepo zmdd elwk xgfm",
  },
});

export const sendemail = async (email: string, otp: string) => {
  const info = await transporter.sendMail({
    from: "baljinnym1318@gmail.com", // sender address
    to: email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: generateHtmlTemplate(otp), // html body
  });

  console.log("Message sent: %s", info.messageId);
};
