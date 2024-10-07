"use client";

import { apiURL } from "@/utils/apiHome";
import axios from "axios";
import { NextPage } from "next";
import { useEffect } from "react";

const Page: NextPage<any> = ({ params }) => {
  const fetchProduct = async () => {
    try {
      const { data } = await axios.get(
        `${apiURL}/api/v1/products/${params.id}`
      );
      console.log("data", data);
    } catch (error) {}
  };
  console.log(params);
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div className="flex w-9/12 m-auto justify-between">
      <div className="flex flex-1">
        <div className="flex flex-col ">
          <img src="" alt="img" />
          <img src="" alt="img" />
          <img src="" alt="img" />
          <img src="" alt="img" />
        </div>
        <div>
          <img src="" alt="img" />
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <p>шинэ</p>
        <h1>Wildflower Hoodie </h1>
        <h3>Зэрлэг цэцгийн зурагтай даавуун материалтай цамц</h3>
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
            <span>1</span>
            <button>+</button>
          </div>
        </div>
        <h2>120’000₮</h2>
        <button>Сагсанд нэмэх</button>
        <div>
          <p>Үнэлгээ</p>
          <button>бүгдийг харах</button>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Page;
