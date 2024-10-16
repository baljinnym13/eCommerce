"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Heart, Trash2 } from "lucide-react";
import { apiURL } from "@/utils/apiHome";
import axios from "axios";
import { toast } from "react-toastify";
import { SaveProduct } from "@/utils/interface";
import { PriceWithDiscount } from "@/components/cards/productCard";
const CartPage = ({ _id, name, price, images, discount }: SaveProduct) => {
  const deleteSaveProduct = async (product_id: string) => {
    const [productId, setProductId] = useState<string | null>(null);
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(
        `${apiURL}save/product/delete`,
        { product_id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.status === 200) {
        toast.success("Бараа амжилттай устгахдлаа");
        setProductId(product_id);
      }
    } catch (error) {
      toast.error("Нэвтэрнэ үү");
      console.error(error);
    }
  };
  const handleClick = (id: string) => {
    deleteSaveProduct(id);
  };
  return (
    <div>
      <h1>Хадгалсан бараа (3)</h1>
      <div className="w-[622px] h-[132px] bg-white rounded-2xl p-4 flex items-center gap-6 relative">
        <img
          src={"images[0]"}
          alt="img"
          className="w-[100px] h-[100px] rounded-2xl"
        />
        <div className="">
          <h1 className="font-normal text-base mb-2">{name}</h1>
          <PriceWithDiscount price={1} discount={discount} />
          <Button className="mt-2 bg-[#2563EB] rounded-3xl">Сагслах</Button>
          <div className="absolute top-4 right-4 fill-inherit">
            <Heart size={22} strokeWidth={1} className="fill-inherit mb-4" />
            <button onClick={() => handleClick(_id)}>
              <Trash2 />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
