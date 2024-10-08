"use client";

import { apiURL } from "@/utils/apiHome";
import axios from "axios";
import { NextPage } from "next";
import { useEffect, useState } from "react";

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
  const [data, setData] = useState<IData>({} as IData);

  const fetchProduct = async () => {
    try {
      const { data } = await axios.get(
        `${apiURL}/api/v1/products/${params.id}`
      );
      setData(data);
    } catch (error) {}
  };

  //   console.log("data", data);
  //   console.log("params", params);

  useEffect(() => {
    fetchProduct();
  }, []);
  console.log("data iamges", data);
  return (
    <div className="flex w-9/12 m-auto justify-between">
      <div className="flex flex-1">
        <div className="flex flex-col ">
          {data.images?.map((img, index) => (
            <img
              src={img}
              alt="images"
              key={index}
              className="w-[422px] h-[521px] rounded-2xl"
            />
          ))}
        </div>
        <div>
          <img src={data.images ? data.images[0] : ""} alt="" />
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <p>{data.isNew ? "shine" : "huuchin"}</p>

        <h1>{data.name}</h1>
        <h3>{data.description}</h3>
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
            <span>{data.quantity}</span>
            <button>+</button>
          </div>
        </div>
        <h2>{data.price}₮</h2>
        <button>Сагсанд нэмэх</button>
        <div>
          <p>Үнэлгээ</p>
          <button>бүгдийг харах</button>
          <div></div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">{data.name}</h1>
          <p className="text-base">{data.description}</p>
          <p className="text-xl font-bold">{data.price}₮</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
