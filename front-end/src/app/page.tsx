"use client";

import { Hero } from "@/components/home";
import { useContext } from "react";


import Cards from "@/components/cards/cards";
export default function HomeContex() {
  return <Home />;
}
function Home() {
  return (
    <main>
      <Hero />
      <Cards />
     
    </main>
  );
}
