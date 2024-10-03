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
      <div className=" w-9/12 flex  gap-4 mb-10">
        <Card className="relative">
          <img src="/image.png" alt="img" className="rounded-lg border-none " />
          <Heart className="absolute right-4 top-4 " color="#c7c6c6" />
          <p>The Prompt Magazine</p>
          <p>120’000₮</p>
        </Card>
        <Card className="relative">
          <img src="/image.png" alt="img" className="rounded-lg border-none " />
          <Heart className="absolute right-4 top-4 " color="#c7c6c6" />
          <p>The Prompt Magazine</p>
          <p>120’000₮</p>
        </Card>
        <Card className="relative">
          <img src="/image.png" alt="img" className="rounded-lg border-none " />
          <Heart className="absolute right-4 top-4 " color="#c7c6c6" />
          <p>The Prompt Magazine</p>
          <p>120’000₮</p>
        </Card>
        <Card className="relative">
          <img src="/image.png" alt="img" className="rounded-lg border-none " />
          <Heart className="absolute right-4 top-4 " color="#c7c6c6" />
          <p>The Prompt Magazine</p>
          <p>120’000₮</p>
        </Card>
      </div>
    </div>
  );
};
