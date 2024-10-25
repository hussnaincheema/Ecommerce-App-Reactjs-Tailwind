import React from "react";
import { Information } from "../data/index";

const InfoSection = () => {
  return (
    <div className="bg-white px-4 pb-8 pt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {Information.map((item, idx) => (
          <div
            key={idx}
            className="flex
          flex-col items-center text-center p-4 border rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
          >
            <item.icon className="text-3xl text-salmonPink" />
            <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-grey-600 ">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
