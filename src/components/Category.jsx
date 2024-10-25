import React from "react";
import { Images } from "../data/index";

const Category = () => {
  return (
    <div className="w-full mx-auto grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6 px-4 sm:px-11">
      {Images.map((image, idx) => (
        <div
          key={idx}
          className="relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
          <img
            src={image.imageUrl}
            alt="Category Images"
            className="w-full h-full sm:object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default Category;
