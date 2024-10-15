import React from "react";
import { HeartIcon } from "lucide-react";

const Heart: () => React.JSX.Element = () => {
  return (
    <div>
      <HeartIcon
        onClick={() => {
          console.log("heart click");
        }}
      />
    </div>
  );
};

export default Heart;
