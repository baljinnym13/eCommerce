"use client";
import React, { ChangeEvent } from "react";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { CgShoppingCart } from "react-icons/cg";

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
          <button className="flex justify-between items-center gap-2 bg-gray-900 p-2 rounded-2xl">
            <FaSearch />
            <input
              type="text"
              placeholder="Бүтээгдэхүүн хайх"
              className="bg-transparent"
            />
          </button>
        </div>
        <div className="flex gap-2">
          <FaRegHeart />
          <CgShoppingCart />
          <button>Бүртгүүлэх</button>
          <button>Нэвтрэх</button>
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default Header;
// onChange={handlechange}
