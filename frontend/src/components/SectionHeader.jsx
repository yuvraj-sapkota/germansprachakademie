import React from "react";

const SectionHeader = ({ title, highlight, description, className }) => {
  return (
    <>
      <div className="space-y-5  md:text-center md:max-w-1/2 mx-auto ">
        <h2 className=" text-3xl md:text-4xl font-bold leading-tight tracking-tight text-gray-900">
          {title}
          <span className="relative z-10 text-red-500"> {highlight}</span>
        </h2>

        <p className="text-gray-500 text-base md:text-lg leading-relaxed w-full lg:max-w-2xl lg:mx-auto">
          {description}
        </p>
      </div>
    </>
  );
};

export default SectionHeader;
