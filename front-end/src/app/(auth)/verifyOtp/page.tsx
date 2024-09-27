"use client";

import { UserContex } from "@/app/context/user-context";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Value } from "@radix-ui/react-select";
import { useRouter } from "next/navigation";
import { apiURL } from "@/utils/apiHome";

import { useState, useEffect, useContext } from "react";
import axios from "axios";

const Otp = () => {
  const { verifyUserEmail, email } = useContext(UserContex);
  const [otpValue, setOtpValue] = useState("");
  const router = useRouter();
  const [countDown, setCountDown] = useState(30);

  useEffect(() => {
    if (countDown > 0) {
      const countdown = setInterval(() => {
        setCountDown((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(countdown);
    }
  }, [countDown]);

  const verifyOtp = async (value: string) => {
    setOtpValue(value);
    console.log("value", value);
    if (value.length === 4) {
      try {
        const res = await axios.post(`${apiURL}/api/v1/auth/verifyOtp`, {
          email,
          otpValue: value,
        });

        if (res.status === 200) {
          console.log("email success");
        }
      } catch (error) {
        console.log(error);
        console.log("otp buruu baina");
      }
    }
  };

  const handleResendOtp = () => {
    setCountDown(30);
  };

  return (
    <div className="h-[calc(100vh-350px)] flex flex-col items-center mt-24">
      <img src="./opt.png" alt="" />
      <h1 className="mt-7 text-2xl font-bold">Баталгаажуулах</h1>
      <p className="mt-2 mb-6 text-text-primary">
        {email} хаягт илгээсэн баталгаажуулах кодыг оруулна уу
      </p>
      <div className="flex flex-col gap-4 text-sm">
        <InputOTP maxLength={4} value={otpValue} onChange={verifyOtp}>
          <InputOTPGroup className="bg-white">
            <InputOTPSlot className="w-14 h-14" index={0} />
            <InputOTPSlot className="w-14 h-14" index={1} />
            <InputOTPSlot className="w-14 h-14" index={2} />
            <InputOTPSlot className="w-14 h-14" index={3} />
          </InputOTPGroup>
        </InputOTP>
        <Button
          className="cursor-pointer text-muted-foreground mt-12 underline text-sm font-medium"
          onClick={verifyUserEmail}
          variant="link"
        >
          Дахин илгээх ({countDown})
        </Button>
      </div>
    </div>
  );
};

export default Otp;

// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";
// import axios from "axios";
// const router = useRouter();
// const [userData, setUserData] = useState({
//   email: "",
// });
// console.log("userData", userData);
// const logIn = async () => {
//   const { email } = userData;

//   try {
//     const res = await axios.post("http://localhost:8000/api/v1/auth/login", {
//       email,
//     });

//     if (res.status === 201) {
//       toast.success("User successfully login", {
//         autoClose: 1000,
//       });
//       router.push("/");
//       console.log("response");
//     }
//   } catch (error) {
//     console.error("There was an error signing up:", error);
//     toast.error("Failed to sign up. Please try again.");
//   }
// };
// const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   const { name, value } = e.target;
//   setUserData((pre) => ({ ...pre, [name]: value }));
// };
