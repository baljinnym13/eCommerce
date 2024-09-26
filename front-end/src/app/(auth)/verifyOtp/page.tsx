// "use client";

// import { Button } from "@/components/ui/button";
// import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
// import {
//   InputOTP,
//   InputOTPGroup,
//   InputOTPSlot,
// } from "@/components/ui/input-otp";

// const verifyOtp = () => {
//   return (
//     <div className="flex flex-col items-center justify-center heightcalc gap-10">
//       <img src="./opt.png" alt="" />
//       <h2>Баталгаажуулах</h2>
//       <p>“mujo@nest.edu.mn” хаягт илгээсэн баталгаажуулах кодыг оруулна уу</p>
//       <div className="flex flex-col gap-4">
//         <InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
//           <InputOTPGroup>
//             <InputOTPSlot index={0} />
//             <InputOTPSlot index={1} />
//             <InputOTPSlot index={2} />
//             <InputOTPSlot index={3} />
//           </InputOTPGroup>
//         </InputOTP>
//         <Button className="bg-blue-700 text-white">Дахин илгээх (30)</Button>
//       </div>
//     </div>
//   );
// };

// export default verifyOtp;

"use client";

import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useRouter } from "next/navigation";

import { useState, useEffect } from "react";

const Otp = () => {
  const router = useRouter();
  const [countDown, setCountDown] = useState(30);
  const [otpValue, setOtpValue] = useState("");

  useEffect(() => {
    if (countDown > 0) {
      const countdown = setInterval(() => {
        setCountDown((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(countdown);
    }
  }, [countDown]);

  const handleResendOtp = () => {
    setCountDown(30);
  };

  const handleConfirmOtp = (value: string) => {
    setOtpValue(value);
    if (value.length === 4) {
      router.push("/forgetpass/newpass");
    }
  };

  return (
    <div className="h-[calc(100vh-350px)] flex flex-col items-center mt-24">
      <img src="./opt.png" alt="" />
      <h1 className="mt-7 text-2xl font-bold">Баталгаажуулах</h1>
      <p className="mt-2 mb-6 text-text-primary">
        “mujo@nest.edu.mn” хаягт илгээсэн баталгаажуулах кодыг оруулна уу
      </p>
      <div className="flex flex-col gap-4 text-sm">
        <InputOTP maxLength={4} value={otpValue} onChange={handleConfirmOtp}>
          <InputOTPGroup className="bg-white">
            <InputOTPSlot className="w-14 h-14" index={0} />
            <InputOTPSlot className="w-14 h-14" index={1} />
            <InputOTPSlot className="w-14 h-14" index={2} />
            <InputOTPSlot className="w-14 h-14" index={3} />
          </InputOTPGroup>
        </InputOTP>
        <Button
          className="cursor-pointer text-muted-foreground mt-12 underline text-sm font-medium"
          onClick={handleResendOtp}
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
