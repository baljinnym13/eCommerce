"use client";

import * as React from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const Review = () => {
  return (
    <>
      <CollapsibleDemo />
    </>
  );
};

export default Review;

export function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [reviewText, setReviewText] = React.useState("бүгдийг харах");
  const [rating, setRating] = React.useState(0);
  const reviewBtn = () => {
    if (isOpen === true) {
      setReviewText("бүгдийг харах");
    } else {
      setReviewText("бүгдийг хураах");
    }
    return reviewText;
  };

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2"
    >
      <div className="flex items-center gap-3">
        <h4 className="text-md  font-normal">Үнэлгээ</h4>
        <CollapsibleTrigger asChild>
          <button
            className="text-sky-700 underline decoration-solid"
            onClick={reviewBtn}
          >
            {reviewText}
          </button>
        </CollapsibleTrigger>
      </div>
      <Rating
        style={{ maxWidth: 180 }}
        value={rating}
        onChange={setRating}
        isRequired
      />
      <CollapsibleContent className="space-y-4">
        <div className="border-b-2 border-dashed px-4 py-3 font-mono text-sm flex flex-col">
          <h5>Saraa</h5>
          <p className="text-xs text-gray-400">
            Ваав материал ёстой гоё байна 😍
          </p>
        </div>
        <div className="border-b-2 border-dashed px-4 py-3 font-mono text-sm flex flex-col">
          <h5>Saraa</h5>
          <p className="text-xs text-gray-400">
            Ваав материал ёстой гоё байна 😍
          </p>
        </div>
        <div className="border-b-2 border-dashed px-4 py-3 font-mono text-sm flex flex-col">
          <h5>Saraa</h5>
          <p className="text-xs text-gray-400">
            Ваав материал ёстой гоё байна 😍
          </p>
        </div>
        <section className="bg-slate-100 border rounded-xl h-56 pl-5 pt-2 flex flex-col gap-6">
          <h4 className="text-sm font-medium">Одоор үнэлэх:</h4>
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium">Сэтгэгдэл үлдээх:</p>
            <input
              type="text"
              placeholder="Энд бичнэ үү"
              className="h-16 w-[300px] border rounded-[9px] pl-2 text-xs pb-10"
            />
          </div>
          <button className="w-24 h-7 border rounded-full bg-blue-700 text-white text-sm">
            Үнэлэх
          </button>
        </section>
      </CollapsibleContent>
    </Collapsible>
  );
}
