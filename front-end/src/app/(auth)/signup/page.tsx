"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    repassword: "",
  });
  console.log("userData", userData);
  const signUp = async () => {
    const { firstname, lastname, email, password, repassword } = userData;
    if (password !== repassword) {
      return toast.error("Нууц үг хоорондоо тохирохгүй байна.");
    }
    try {
      const res = await axios.post("http://localhost:8000/api/v1/auth/signup", {
        firstname,
        lastname,
        email,
        password,
      });

      if (res.status === 201) {
        toast.success("User successfully signed up", {
          autoClose: 1000,
        });
        router.push("/login");
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
      <h2>Бүртгүүлэх</h2>
      <div className="flex flex-col gap-4">
        <Input
          type="text"
          placeholder="Нэр"
          name="firstname"
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder="Овог"
          name="lastname"
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder="Имэйл хаяг"
          className="w-[334px] h-[36px]"
          name="email"
          onChange={handleChange}
        />

        <Input
          type="password"
          placeholder="Нууц үг"
          name="password"
          onChange={handleChange}
        />
        <Input
          type="password"
          placeholder="Нууц үг давтах "
          name="repassword"
          onChange={handleChange}
        />
        <Button className="bg-blue-700 text-white" onClick={signUp}>
          Бүртгүүлэх
        </Button>

        <Link href="sdfsf" className="m-auto">
          Нууц үг мартсан
        </Link>
      </div>
      <div className="w-[334px] h-[36px] flex justify-center items-center  border border-blue-700 text-blue-700 rounded-lg">
        <Link href="../login">Нэвтрэх</Link>
      </div>
    </div>
  );
};

export default SignUp;
