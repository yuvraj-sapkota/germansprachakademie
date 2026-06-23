import React from "react";

const LanguageBadge = () => {
  return (
    <>
      <div className="flex flex-wrap gap-3 mt-8">
        {["German", "English", "Japanese", "Korean"].map((item) => (
          <span
            key={item}
            className="bg-white/10 text-white backdrop-blur-md border border-gray-300 px-6 py-3 rounded-full text-sm  transition-all duration-300"
          >
            {item}
          </span>
        ))}
      </div>
    </>
  );
};

export default LanguageBadge;
