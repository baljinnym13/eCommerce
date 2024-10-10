"use client";
import React, { ChangeEvent, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { CgShoppingCart } from "react-icons/cg";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useUser } from "@/app/context/user-context";
import { LogOut, User } from "lucide-react";
import { useRouter } from "next/navigation";
const Header = () => {
  const { user, setUser } = useUser();
  const router = useRouter();
  const logOut = () => {
    setUser(null);
    localStorage.removeItem("token");
    router.push("/login");
  };
  return (
    <div className="w-full bg-black py-4 px-8 m-auto">
      <div className="flex w-full justify-between text-white ">
        <div className="flex justify-between items-center gap-2 ">
          <img src="./logo.png" alt="logo" />

          <Link href="/">ECOMMERCE</Link>
          <button>Ангилал</button>
        </div>
        <div>
          <button className="flex justify-center items-center gap-2 bg-gray-900 px-4 py-1 rounded-2xl">
            <FaSearch />
            <Input
              type="text"
              placeholder="Бүтээгдэхүүн хайх"
              className="border-transparent"
            />
          </button>
        </div>
        <div className="flex justify-center items-center gap-2">
          <FaRegHeart />
          <CgShoppingCart />

          {user ? (
            <>
              <User />
              <LogOut onClick={logOut} />
            </>
          ) : (
            <>
              <Link href="/signup">Бүртгүүлэх</Link>
              <Link href="/login">Нэвтрэх</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
