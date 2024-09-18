import React, { ChangeEvent } from "react";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { CgShoppingCart } from "react-icons/cg";
import { Button } from "./ui/button";
interface IHeaderProps {
  title?: string;
  color?: string;
  handler: () => void;
}
const Header = ({ handler }: IHeaderProps) => {
  const handlechange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("name", e.target.name);
    console.log("value", e.target.value);
  };
  return (
    <div className=" w-[1440px] bg-black py-4 px-8">
      <div className="flex w-full justify-between text-white ">
        <div className="flex gap-1">
          <img src="./logo.png" alt="logo" />
          <h1 className="text-white">ECOMMERCE</h1>
          <button>Ангилал</button>
        </div>
        <div>
          <button className="flex gap-1">
            <FaSearch />
            <input type="text" placeholder="Бүтээгдэхүүн хайх" />
          </button>
        </div>
        <div className="flex gap-2">
          <FaRegHeart />
          <CgShoppingCart />
          <button>Бүртгүүлэх</button>
          <button>Нэвтрэх</button>
          <Button onClick={handler}>Greeting</Button>
          <input type="text" onChange={handlechange} />
        </div>
      </div>
    </div>
  );
};

export default Header;
