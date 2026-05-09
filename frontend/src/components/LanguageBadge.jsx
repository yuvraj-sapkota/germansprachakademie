import React from "react";

const LanguageBadge = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-wrap gap-3 mt-8">
        {["German", "English", "Japanese", "Korean"].map((item) => (
          <span
            key={item}
            className="bg-white backdrop-blur-md border border-gray-300 text-gray-500 px-6 py-3 rounded-full text-sm  transition-all duration-300 cursor-pointer "
          >
            {item}
          </span>
        ))}
      </div>
    </>
  );
};

export default LanguageBadge;
