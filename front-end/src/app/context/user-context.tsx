"use client";

import { createContext, Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

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
  fetchUserData: () => void;
  user: {};
};

export const UserContex = createContext<UserContexProps>({
  verifyOtp: () => {},
  verifyUserEmail: () => {},
  setEmail: () => {},
  setOtpValue: () => {},
  otpValue: "",
  email: "",
  fetchUserData: () => {},
  user: {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [otpValue, setOtpValue] = useState("");
  const [user, setUser] = useState({});

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

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      //
      const response = await axios.get(`${apiURL}/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setUser(response.data.profile);
        console.log("USER", response.data);
        3;
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <UserContex.Provider
      value={{
        verifyOtp,
        setOtpValue,
        otpValue,
        verifyUserEmail,
        setEmail,
        email,
        fetchUserData,
        user,
      }}
    >
      {children}
    </UserContex.Provider>
  );
};
