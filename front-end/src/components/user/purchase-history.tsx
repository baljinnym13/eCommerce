import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const PurchaseHistory = () => {
  return (
    <div className="h-screen w-[620px]">
      <h1 className="text-lg font-bold">Захиалгын түүх</h1>
      <Separator className="my-6" />
      <Accordion type="single" collapsible>
        <AccordionItem
          value="history-1"
          className="bg-white py-8 px-6 rounded-2xl"
        >
          <AccordionTrigger className="text-base font-bold">
            2024-09-03 15:34
          </AccordionTrigger>
          <AccordionContent>
            <div className="border-b border-dashed pb-4 border-border flex items-center justify-between">
              <div className="flex gap-2">
                <img
                  src="/wishlist/wishlist1.png"
                  alt="image"
                  className="w-9 h-10 rounded-md"
                />
                <div className="text-xs font-normal">
                  <p className="mb-1">Chunky Glyph Tee</p>
                  <p>1 x 120’000₮</p>
                </div>
              </div>
              <p className="font-bold">120’000₮</p>
            </div>
          </AccordionContent>
          <div className="flex justify-between">
            <p>Үнийн дүн:</p>
            <p className="text-lg font-bold">480’000₮</p>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
