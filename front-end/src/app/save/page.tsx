"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { Heart, Trash2 } from "lucide-react";
import { apiURL } from "@/utils/apiHome";
import axios from "axios";
import { toast } from "react-toastify";
import { IProduct, SaveProduct } from "@/utils/interface";
import { PriceWithDiscount } from "@/components/cards/productCard";

const CartPage = ({ _id, name, price, images, discount }: SaveProduct) => {
  const [proArr, setProArr] = useState<IProduct[]>([]);
  const fetchSaveProducts = async () => {
    const token = localStorage.getItem("token");
    console.log("token ", token);
    try {
      const res = await axios.get(`${apiURL}/api/v1/save/product`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("first ok");
      if (res.status === 200) {
        const { proArr } = res.data;
        console.log("data", proArr);
        setProArr(proArr.map((cur: any) => cur.product_id));
      }
      if (res.status === 400) {
        toast.error("baraa alga");
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchSaveProducts();
  }, []);
  const deleteSaveProduct = async (product_id: string) => {
    // const [productId, setProductId] = useState<string | null>(null);
    const token = localStorage.getItem("token");
    console.log("id");
    try {
      const res = await axios.delete(
        `${apiURL}/api/v1/save/product/delete/${product_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 200) {
        toast.success("Бараа амжилттай устгахдлаа");
      }
    } catch (error) {
      toast.error("Нэвтэрнэ үү");
      console.error(error);
    }
  };
  const handleClick = (id: string) => {
    deleteSaveProduct(id);
    console.log("id", id);
  };

  console.log(proArr, "-------");
  return (
    <div>
      <h1>Хадгалсан бараа (3)</h1>
      <div>
        {proArr.map((pro, index) => {
          return (
            <div
              className="w-[622px] h-[132px] bg-white rounded-2xl p-4 flex items-center gap-6 relative"
              key={index}
            >
              <img
                src={pro?.images?.[0] || ""}
                alt="img"
                className="w-[100px] h-[100px] rounded-2xl"
              />
              <div className="">
                <h1 className="font-normal text-base mb-2">{pro.name}</h1>
                <PriceWithDiscount
                  price={pro?.price || 0}
                  discount={pro.discount}
                />
                <Button className="mt-2 bg-[#2563EB] rounded-3xl">
                  Сагслах
                </Button>
                <div className="absolute top-4 right-4 fill-inherit">
                  <Heart
                    size={22}
                    strokeWidth={1}
                    className="fill-inherit mb-4"
                  />
                  <button onClick={() => handleClick(pro._id)}>
                    <Trash2 />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartPage;
