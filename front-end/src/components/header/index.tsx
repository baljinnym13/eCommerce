import React from "react";
import { Button } from "../ui/button";

// interface IUser {
//   name: string;
// }

// interface IPUser extends IUser{
//     password : string
// }
// interface ItextProps {
//   users: [];
//   color?: string;
// }

interface ItextProps {
  title: string;
  color?: string;
}
const text = ({ title }: ItextProps) => {
  return (
    <div>
      {title}
      <Button
        onClick={() => {
          alert("sainuu");
        }}
      >
        Greeting
      </Button>
    </div>
  );
};

export default text;
