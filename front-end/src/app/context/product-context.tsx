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
