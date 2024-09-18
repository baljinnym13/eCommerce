import React from "react";
import { Button } from "../ui/button";

// interface IUser {
//   name: string;
// }

// interface IPUser extends IUser{
//     password : string
// }
// interface IHeaderProps {
//   users: [];
//   color?: string;
// }

interface IHeaderProps {
  title: string;
  color?: string;
}
const Header = ({ title }: IHeaderProps) => {
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

export default Header;
