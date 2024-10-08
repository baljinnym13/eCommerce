"use client";

import { apiURL } from "@/utils/apiHome";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

interface IProduct {
  name: string;
  price: string;
  description: string;
  size: string;
  images: string;
  isNew: boolean;
  _id: string;
  quantity: number;
  discount: number;
  category: string;
}

interface IproductContext {
  products: IProduct[];
  fetchProductData: () => void;
}

export const ProductContext = createContext<IproductContext>({
  products: [],
  fetchProductData: () => {},
});

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const fetchProductData = async () => {
    try {
      const res = await axios.get(`${apiURL}/api/v1/products`);
      setProducts(res.data.products);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  console.log("products", products);

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <ProductContext.Provider value={{ products, fetchProductData }}>
      {children}
    </ProductContext.Provider>
  );
};

// category
// :
// "64a6f9ecf1a3cbe3f4f8c004"
// createdAt
// :
// "2024-09-30T10:59:30.703Z"
// description
// :
// "Stylish leather jacket"
// discount
// :
// 20
// images
// :
// ['https://i.ibb.co/cLcXphk/image3.png']
// isNew
// :
// true
// isnew
// :
// true
// name
// :
// "Leather Jacket"
// price
// :
// 1200000
// quantity
// :
// 15
// size
// :
// "XL"
// updatedAt
// :
// "2024-09-30T10:59:30.703Z"
// _id
// :
// "66fa5aef9561796225b3743c"
// [[Prototype]]
// :
// Object
