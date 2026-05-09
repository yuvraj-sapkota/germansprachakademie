import { MoveRight } from "lucide-react";
import React from "react";

const Button = ({ text, className }) => {
  return (
    <>
      <button
        className={` px-6 py-3 rounded-lg font-semibold  gap-2 w-fit duration-200 transition ${className} `}
      >
        <MoveRight size={18} className="hidden" /> {text}
      </button>
    </>
  );
};

export default Button;
