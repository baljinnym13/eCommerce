"use client";

import { Hero } from "@/components/home";
import { apiURL } from "@/utils/apiHome";
import { IProduct } from "@/utils/interface";
import axios from "axios";
import React, { useEffect, useState } from "react";

import Cards from "@/components/cards/cards";
export default function HomeContex() {
  return <Home />;
}
function Home() {
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
  return (
    <main>
      <Hero />
      <section className="mt-6 mb-24 max-w-[1100px] mx-auto grid grid-cols-4 gap-y-12 gap-x-5">
        {products.map((product, index) => {
          return (
            <>
              {index === 6 || index === 7 ? (
                <Cards key={index} {...product} />
              ) : (
                <Cards key={index} {...product} />
              )}
            </>
          );
        })}
      </section>
    </main>
  );
}
