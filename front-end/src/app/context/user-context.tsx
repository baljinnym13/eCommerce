"use client";

import { createContext, Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import { apiURL } from "@/utils/apiHome";
import { useState } from "react";

interface IUser {
  firstName: String;
  lastName: String;
  email: String;
  password: String;
  repassword: String;
}

type UserContexProps = {
  verifyOtp: () => void;
  verifyUserEmail: () => void;
  setEmail: Dispatch<SetStateAction<string>>;
  setOtpValue: Dispatch<SetStateAction<string>>;
  otpValue: string;
  email: string;
};

export const UserContex = createContext<UserContexProps>({
  verifyOtp: () => {},
  verifyUserEmail: () => {},
  setEmail: () => {},
  setOtpValue: () => {},
  otpValue: "",
  email: "",
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [otpValue, setOtpValue] = useState("");

  const verifyOtp = async () => {
    try {
      const res = await axios.post(`${apiURL}/api/v1/auth/verifyOtp`, {
        email,
        otpValue,
      });

      if (res.status === 200) {
        console.log("email success");
      }
    } catch (error) {
      console.log(error);
      console.log("otp buruu baina");
    }
  };

  const verifyUserEmail = async () => {
    try {
      const res = await axios.post(`${apiURL}/api/v1/auth/forgeyPass`, {
        email,
      });
      if (res.status === 200) {
        console.log("email success");
        router.push("/verifyOtp");
      }
    } catch (error) {
      console.log(error);
      console.log("email failed");
    }
  };
  console.log("first", otpValue);
  console.log("email", email);

  return (
    <UserContex.Provider
      value={{
        verifyOtp,
        setOtpValue,
        otpValue,
        verifyUserEmail,
        setEmail,
        email,
      }}
    >
      {children}
    </UserContex.Provider>
  );
};
// export const ProfileProvider = ({
//     children,
//   }: {
//     children: React.ReactNode;
//   }) => {
//     const router = useRouter();
//     const [userForm, setUserForm] = useState<IUser>({
//       firstName: "",
//       lastName: "",
//       email: "",
//       password: "",
//       repassword: "",
//     });
