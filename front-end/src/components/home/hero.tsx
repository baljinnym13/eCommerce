"use client";

import { Heart } from "lucide-react";
import { Card } from "../ui/card";

export const Hero = () => {
  return (
    <div className="flex flex-col w-screen items-center justify-between   gap-10">
      <div className="relative flex justify-center items-center w-full h-[446px]  ">
        <img src="/hoodie.png" alt="img" className="w-full h-full " />
        <div className=" absolute left-auto bottom-2 flex flex-col gap-4  w-9/12  m-auto  ">
          <p>Wildflower Hoodie</p>
          <h1>120’000₮</h1>
        </div>
      </div>

      {/* product oruulj irj maplana */}
    </div>
  );
};
