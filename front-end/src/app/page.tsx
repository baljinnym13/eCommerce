"use client";

import { Hero } from "@/components/home";
import { useContext } from "react";
import { ProductContext } from "./context/product-context";
import Link from "next/link";

export default function Home() {
  const { products, fetchProductData } = useContext(ProductContext);

  console.log("produstssaaas", products);
  return (
    <main>
      <Hero />
      <div className=" w-9/12 m-auto container grid grid-cols-4 gap-5 my-10 grid-row-6">
        {products?.map((product, i) => {
          return (
            <>
              <Link href={"/" + product._id}>
                {i === 6 || i === 7 ? (
                  <div className="col-span-2 row-span-2 bg-red-400">
                    <div className="h-[692px] w-full rounded-2xl overflow-hidden">
                      <img src={product.images[0]} alt="" className="w-full" />
                    </div>
                    <p>{product.name}</p>
                    <p className="font-bold">{product.price}</p>
                  </div>
                ) : (
                  <div>
                    <div className="h-[331px] w-full rounded-2xl overflow-hidden">
                      <img src={product.images[0]} alt="" className="w-full" />
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
    </main>
  );
}
