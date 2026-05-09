import React from "react";

const InformationCard = ({ Icon, title, description }) => {
  return (
    <>
      <div
        key={title}
        className="group bg-gray-100 hover:bg-red-50 border border-gray-100 hover:border-red-200 rounded-2xl p-5 transition-all duration-300 cursor-default  hover:-translate-y-1 shadow-md"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-white group-hover:bg-red-500 border border-gray-200 group-hover:border-red-500 rounded-xl h-10 w-10 flex items-center justify-center transition-all duration-300 shadow-sm">
            <Icon
              size={18}
              className="text-red-500 group-hover:text-white transition-colors duration-300"
            />
          </div>
          <h3 className="font-semibold text-sm text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      </div>
    </>
  );
};

export default InformationCard;
