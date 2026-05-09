import React from "react";

const Badge = ({ text, className }) => {
  return (
    <>
      <div className={`flex items-center ${className}`}>
        <p className="text-yellow-600 font-bold text-xs bg-yellow-200 px-3 py-1 w-fit rounded-lg flex items-center gap-2 uppercase mb-1  ">
          {text}
        </p>
      </div>
    </>
  );
};

export default Badge;
