"use client";
import React from "react";
import { BsTelephone } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { TfiTwitterAlt } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa";

const Foooter = () => {
  return (
    <div className="bg-black text-white w-full flex flex-col gap-[43px] px-[200px] py-[64px] m-auto">
      <div className="flex justify-between">
        <img src="./logo.png" alt="logo" />
        <div className="flex gap-[38px]">
          <div className="flex justify-center items-center gap-[20px]">
            <div className="border border-collapse rounded-full p-2">
              <BsTelephone />
            </div>
            <p>(976) 7007-1234</p>
          </div>
          <div className="flex justify-center items-center gap-[20px]">
            <div className="border border-collapse rounded-full p-2">
              <IoMailOutline />
            </div>
            <p>contact@ecommerce.mn</p>
          </div>
        </div>
      </div>
      <div className="border bottom-1 border-opacity-75"></div>
      <div className="flex justify-between">
        <p>© 2024 Ecommerce MN</p>
        <div className="flex gap-[26px]">
          <FaFacebook />
          <RiInstagramLine />
          <TfiTwitterAlt />
          <FaLinkedin />
        </div>
      </div>
    </div>
  );
};

export default Foooter;
