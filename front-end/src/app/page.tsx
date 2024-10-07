"use client";

import { Hero } from "@/components/home";
import { useContext } from "react";
import { ProductContext, ProductProvider } from "./context/product-context";
import Link from "next/link";
import { Heart } from "lucide-react";
export default function HomeContex() {
  return (
    <ProductProvider>
      <Home />
    </ProductProvider>
  );
}
function Home() {
  const { products, fetchProductData } = useContext(ProductContext);

  console.log("produstssaaas", products);
  return (
    <main>
      <Hero />
      <div className=" w-9/12 m-auto container grid grid-cols-4  gap-5 my-10 ">
        {products?.map((product, i) => {
          return (
            <>
              <Link href={"/detail/" + product._id}>
                {i === 6 || i === 7 ? (
                  <div className=" row-span-2 col-span-2">
                    <div className=" relative w-full rounded-2xl overflow-hidden">
                      <img src={product.images[0]} alt="" className="w-full" />
                      <Heart className=" absolute top-8 right-8 text-gray-700" />
                    </div>

                    <p>{product.name}</p>
                    <p className="font-bold">{product.price}</p>
                  </div>
                ) : (
                  <div>
                    <div className=" relative  h-[331px] w-full rounded-2xl overflow-hidden">
                      <img src={product.images[0]} alt="" className="w-full" />
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
    </main>
  );
}
