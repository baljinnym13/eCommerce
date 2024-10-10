"use client";

import { apiURL } from "@/utils/apiHome";
import axios from "axios";
import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import Review from "@/components/review";

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
  const checksize = () => {};

  return (
    <>
      <div className="flex w-9/12 m-auto justify-between  my-8 gap-5">
        <div className="flex flex-1 gap-4">
          <div className="flex flex-col justify-start mt-8 gap-2 ">
            {products.map((product, index) => (
              <img
                src={product.images[0]}
                alt="images"
                key={index}
                className="w-[87px] h-[87px] rounded-lg"
              />
            ))}
          </div>
          <div>
            <img
              src={proData.images ? proData.images[0] : ""}
              alt=""
              className="w-[422px] h-[5   21px] rounded-2xl"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1 mt-28 gap-3">
          <button className="w-16 h-5 border rounded-full border-blue-500 text-xs">
            {proData.isNew ? "ШИНЭ" : "ХУУЧИН"}
          </button>

          <h2 className="font-bold text-xl">{proData.name}</h2>
          <p className="font-light text-sm">{proData.description}</p>
          <div>
            <p>Хэмжээний заавар</p>
            <div className="flex gap-1 p-1">
              <button
                className="w-8 h-8 rounded-full border-[1px] border-black text-center"
                onClick={checksize}
              >
                S
              </button>
              <button className="w-8 h-8 rounded-full border-[1px] border-black text-center">
                M
              </button>
              <button className="w-8 h-8 rounded-full border-[1px] border-black text-center">
                L
              </button>
              <button className="w-8 h-8 rounded-full border-[1px] border-black text-center">
                XL
              </button>
              <button className="w-8 h-8 rounded-full border-[1px] border-black text-center">
                2XL
              </button>
            </div>

            <div className="flex item-center gap-2 mt-3">
              <button className="w-8 h-8 rounded-full border-[1px] border-black text-center">
                -{" "}
              </button>
              <p className="mt-1">1</p>
              <button className="w-8 h-8 rounded-full border-[1px] border-black text-center">
                +
              </button>
            </div>
          </div>
          <h1 className="font-bold">{proData.price}₮</h1>
          <button className="w-40 h-8  mb-5 rounded-full text-white text-sm font-medium bg-blue-700">
            Сагсанд нэмэх
          </button>
          <Review />
        </div>
      </div>
      <div className="w-9/12 m-auto">
        <h1 className="font-bold text-2xl ">Холбоотой бараа</h1>

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
