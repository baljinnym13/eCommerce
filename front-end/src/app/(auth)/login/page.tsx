"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import axios from "axios";

const LogIn = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  console.log("userData", userData);
  const logIn = async () => {
    const { email, password } = userData;

    try {
      const res = await axios.post("http://localhost:8000/api/v1/auth/login", {
        email,
        password,
      });

      if (res.status === 201) {
        toast.success("User successfully login", {
          autoClose: 1000,
        });
        const { token } = res.data;
        localStorage.setItem("token", token);
        console.log("token", token);
        router.push("/");
        console.log("response");
      }
    } catch (error) {
      console.error("There was an error signing up:", error);
      toast.error("Failed to sign up. Please try again.");
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((pre) => ({ ...pre, [name]: value }));
  };

  return (
    <div className="flex flex-col items-center justify-center heightcalc gap-10">
      <h2>Нэвтрэх</h2>
      <div className="flex flex-col gap-4">
        <Input
          type="text"
          placeholder="Имэйл хаяг"
          className="w-[334px] h-[36px]"
          name="email"
          onChange={handleChange}
        />
        <Input
          type="Password"
          placeholder="Нууц үг"
          name="password"
          onChange={handleChange}
        />
        <Button className="bg-blue-700 text-white" onClick={logIn}>
          Нэвтрэх
        </Button>

        <Link
          href="/forgetPass"
          className="m-auto
        "
        >
          Нууц үг мартсан
        </Link>
      </div>
      <div className="w-[334px] h-[36px] flex justify-center items-center  border border-blue-700 text-blue-700 rounded-lg">
        <Link href="../signup">Бүртгүүлэх</Link>
      </div>
    </div>
  );
};

export default LogIn;
