"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import axios from "axios";

const ForgetPass = () => {
  const [email, setEmail] = useState;
  const handleEmail = (e: ChangeEvent<HTMLAnchorElement>) => {
    setEmail(e.target.value);
  };
  const handleSendOtp = () => {
    try {
      axios.post("http://localhost:800/api/v1/auth/forgetPass", { email });
    } catch (error) {}
  };

  return (
    <div className="flex flex-col items-center justify-center heightcalc gap-10">
      <h2>Нууц үг сэргээх</h2>
      <div className="flex flex-col gap-4">
        <Input
          type="text"
          placeholder="Имэйл хаяг"
          className="w-[334px] h-[36px]"
          name="email"
          onChange={handleEmail}
        />

        <Button className="bg-blue-700 text-white" onClick={handleSendOtp}>
          Илгээх
        </Button>
      </div>
    </div>
  );
};

export default ForgetPass;

// const router = useRouter();
//   const [userData, setUserData] = useState({
//     email: "",
//   });
//   console.log("userData", userData);
//   const logIn = async () => {
//     const { email } = userData;

//     try {
//       const res = await axios.post("http://localhost:8000/api/v1/auth/login", {
//         email,
//       });

//       if (res.status === 201) {
//         toast.success("User successfully login", {
//           autoClose: 1000,
//         });
//         router.push("/");
//         console.log("response");
//       }
//     } catch (error) {
//       console.error("There was an error signing up:", error);
//       toast.error("Failed to sign up. Please try again.");
//     }
//   };
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setUserData((pre) => ({ ...pre, [name]: value }));
//   };
