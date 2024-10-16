"use client";

import { Heart } from "lucide-react";
import { Card } from "../ui/card";
import { ProductCard } from "../product-card";
import { useEffect, useState } from "react";
import { Product } from "@/utils/interface";
import axios from "axios";
import { apiURL } from "@/utils/apiHome";

export const Hero = () => {
  const [product, setProduct] = useState<Product[]>();
  const fetchHeroData = async () => {
    const { data } = await axios.get(`${apiURL}/api/v1/products/hero`);

    setProduct(data.product);
  };
  useEffect(() => {
    fetchHeroData();
  }, []);
  console.log("hero pro", product);
  // console.log("hero data", data);
  return (
    <>
      {product?.map((pro, i) => {
        return (
          <div className="flex flex-col w-screen items-center justify-between   gap-10">
            <div className="relative flex justify-center items-center w-full h-[446px]  ">
              <img src={pro.images[0]} alt="img" className="w-full h-full " />
              <div className=" absolute left-auto bottom-2 flex flex-col gap-4  w-9/12  m-auto  ">
                <p>{pro.name}</p>
                <h1>{pro.price}₮</h1>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
