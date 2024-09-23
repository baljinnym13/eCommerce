import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const LogIn = () => {
  return (
    <div className="flex flex-col items-center justify-center heightcalc gap-10">
      <h2>Нэвтрэх</h2>
      <div className="flex flex-col gap-4">
        <Input
          type="text"
          placeholder="Имэйл хаяг"
          className="w-[334px] h-[36px]"
        />
        <Input type="Password" placeholder="Нууц үг" />
        <Button className="bg-blue-700 text-white">Нэвтрэх</Button>

        <Link href="sdfsf" className="m-auto">
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
