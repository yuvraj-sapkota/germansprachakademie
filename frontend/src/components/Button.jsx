
import React from "react";

const Button = ({ text, className, onClick }) => {
  return (
    <>
      <button onClick={onClick}
        className={` px-6 py-3 rounded-lg font-semibold  gap-2 w-fit duration-200 transition ${className} `}
      >
         {text}
      </button>
    </>
  );
};

export default Button;
