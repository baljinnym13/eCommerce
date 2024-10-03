import React from "react";
import { User, PurchaseHistory } from "../../components/user";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

const UserInfo = () => {
  return (
    <Tabs defaultValue="user" className="flex my-28 justify-center gap-5">
      <TabsList className="flex flex-col mt-2 w-[244px] gap-3">
        <TabsTrigger value="user" className="rounded-2xl w-full py-2">
          Хэрэглэгчийн хэсэг
        </TabsTrigger>
        <TabsTrigger value="purchase" className="rounded-2xl w-full py-2">
          Захиалгын түүх
        </TabsTrigger>
      </TabsList>
      <TabsContent value="user" className="mt-0">
        <User />
      </TabsContent>
      <TabsContent value="purchase" className="mt-0">
        <PurchaseHistory />
      </TabsContent>
    </Tabs>
  );
};

export default UserInfo;
