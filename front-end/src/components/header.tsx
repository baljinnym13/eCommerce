"use client";
import React, { ChangeEvent } from "react";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { CgShoppingCart } from "react-icons/cg";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-9/12 bg-black py-4 px-8 m-auto">
      <div className="flex w-full justify-between text-white ">
        <div className="flex justify-between items-center gap-2 ">
          <img src="./logo.png" alt="logo" />
          <h1 className="text-white mr-8">ECOMMERCE</h1>
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

          <Link href="/signup">Бүртгүүлэх</Link>
          <Link href="/login">Нэвтрэх</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
