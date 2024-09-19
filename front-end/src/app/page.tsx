"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

import Foooter from "@/components/footer";
import LogIn from "./(auth)/login/page";

export default function Home() {
  return (
    <div className="w-full h-full ">
      <LogIn />
    </div>
  );
}
