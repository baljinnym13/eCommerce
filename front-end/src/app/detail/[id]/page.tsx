"use client";

import { apiURL } from "@/utils/apiHome";
import axios from "axios";
import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

interface IData {
  name: string;
  price: number;
  description: string;
  size: string;
  images: [string];
  isNew: boolean;
  _id: string;
  quantity: number;
  discount: number;
  category: string;
}
const Page: NextPage<any> = ({ params }) => {
  const [proData, setProData] = useState<IData>({} as IData);
  const [products, setProducts] = useState<IData[]>([]);

  const fetchProduct = async () => {
    try {
      const { data } = await axios.get(
        `${apiURL}/api/v1/products/${params.id}`
      );
      setProData(data);
    } catch (error) {}
  };

  const relatedProduct = async () => {
    try {
      if (!proData.category) {
        return;
      }
      const { data } = await axios.get(
        `${apiURL}/api/v1/products/related/${proData.category}`
      );
      console.log("relatedPRODUCTS", data);
      setProducts(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  useEffect(() => {
    relatedProduct();
  }, [proData]);

  return (
    <>
      <div className="flex w-9/12 m-auto justify-between">
        <div className="flex flex-1">
          <div className="flex flex-col ">
            {proData.images?.map((img, index) => (
              <img
                src={img}
                alt="images"
                key={index}
                className="w-[422px] h-[521px] rounded-2xl"
              />
            ))}
          </div>
          <div>
            <img src={proData.images ? proData.images[0] : ""} alt="" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <p>{proData.isNew ? "shine" : "huuchin"}</p>

          <h1>{proData.name}</h1>
          <h3>{proData.description}</h3>
          <div>
            <p>Хэмжээний заавар</p>
            <div>
              <button>S</button>
              <button>M</button>
              <button>L</button>
              <button>XL</button>
              <button>2XL</button>
            </div>
            <div>
              <button>-</button>
              <span>{proData.quantity}</span>
              <button>+</button>
            </div>
          </div>
          <h2>{proData.price}₮</h2>
          <button>Сагсанд нэмэх</button>
          <div>
            <p>Үнэлгээ</p>
            <button>бүгдийг харах</button>
            <div></div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">{proData.name}</h1>
            <p className="text-base">{proData.description}</p>
            <p className="text-xl font-bold">{proData.price}₮</p>
          </div>
        </div>
      </div>
      <div className="w-9/12 m-auto">
        <h1>Холбоотой бараа</h1>

        <div className=" w-full  container grid grid-cols-4  gap-5 my-10 ">
          {products?.map((product, i) => {
            return (
              <>
                <Link href={"/detail/" + product._id}>
                  {i === 6 || i === 7 ? (
                    <div className=" row-span-2 col-span-2">
                      <div className=" relative w-full rounded-2xl overflow-hidden">
                        <img
                          src={product.images[0]}
                          alt=""
                          className="w-full"
                        />
                        <Heart className=" absolute top-8 right-8 text-gray-700" />
                      </div>

                      <p>{product.name}</p>
                      <p className="font-bold">{product.price}</p>
                    </div>
                  ) : (
                    <div>
                      <div className=" relative  h-[331px] w-full rounded-2xl overflow-hidden">
                        <img
                          src={product.images[0]}
                          alt=""
                          className="w-full"
                        />
                        <Heart className=" absolute top-8 right-8 text-gray-700" />
                      </div>

                      <p>{product.name}</p>
                      <p className="font-bold">{product.price}</p>
                    </div>
                  )}
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Page;
