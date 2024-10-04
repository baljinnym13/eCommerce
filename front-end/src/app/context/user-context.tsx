"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
} from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

import { apiURL } from "@/utils/apiHome";
import { useState } from "react";

interface IUser {
  firstName: String;
  lastName: String;
  email: String;
}

type UserContexProps = {
  verifyOtp: () => void;
  verifyUserEmail: () => void;
  setEmail: Dispatch<SetStateAction<string>>;
  setOtpValue: Dispatch<SetStateAction<string>>;
  otpValue: string;
  email: string;
  fetchUserData: () => void;
  user: IUser | null;
  setUser: Dispatch<SetStateAction<IUser | null>>;
  setToken: Dispatch<SetStateAction<string | null>>;
};

export const UserContex = createContext<UserContexProps>({
  verifyOtp: () => {},
  verifyUserEmail: () => {},
  setEmail: () => {},
  setOtpValue: () => {},
  otpValue: "",
  email: "",
  fetchUserData: () => {},
  user: null,
  setUser: () => {},
  setToken: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [token, setToken] = useState<string | null>(null);
  const [otpValue, setOtpValue] = useState("");
  const [user, setUser] = useState<IUser | null>(null);

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
      const response = await axios.get(`${apiURL}/api/v1/auth/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setUser(response.data.user);
        console.log("USER", response.data);
        3;
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  useEffect(() => {
    if (token) {
      fetchUserData();
    } else {
      setToken(localStorage.getItem("token"));
    }
  }, [token]);
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
        setUser,
        setToken,
      }}
    >
      {children}
    </UserContex.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContex);
};
