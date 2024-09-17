"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState<number>(5);
  const minus = () => {
    setCount(count - 1);
  };
  const add = () => {
    setCount(count + 1);
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Wellcome E-Commerce-App</h1>
      <div>
        <Button variant={"destructive"} onClick={minus}>
          -
        </Button>
        <label className="text-4xl mx-5">{count}</label>
        <Button onClick={add}>+</Button>
      </div>
    </div>
  );
}
