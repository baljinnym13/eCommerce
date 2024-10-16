"use client";
import { apiURL } from "@/utils/apiHome";
import { IProduct } from "@/utils/interface";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Heart } from "lucide-react";

const Cards = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const fetchProductsData = async () => {
    try {
      const res = await axios.get(`${apiURL}/api/v1/products`);
      setProducts(res.data.products);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  useEffect(() => {
    fetchProductsData();
  }, []);
  console.log("products cardiin", products);
  return (
    <div>
      <div className=" w-9/12 m-auto container grid grid-cols-4  gap-5 my-10 ">
        {products?.map((product, i) => {
          return (
            <>
              <div className="relative w-[245px] h-[391px]">
                <Link href={"/detail/" + product._id} className="w-full h-full">
                  {i === 6 || i === 7 ? (
                    <div className=" row-span-2 col-span-2  ">
                      <div className="  w-full rounded-2xl overflow-hidden">
                        <img
                          src={product.images[0]}
                          alt=""
                          className="w-full h-full"
                        />
                      </div>

                      <p>{product.name}</p>
                      <p className="font-bold">{product.price}</p>
                    </div>
                  ) : (
                    <div>
                      <div className="   h-[331px] w-full rounded-2xl overflow-hidden">
                        <img
                          src={product.images[0]}
                          alt=""
                          className="w-full"
                        />
                      </div>

                      <p>{product.name}</p>
                      <p className="font-bold">{product.price}</p>
                    </div>
                  )}
                </Link>
                <Heart
                  className=" absolute top-8 right-8 text-gray-700"
                  onClick={() => {
                    console.log("click");
                  }}
                />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
