import React from "react";
import { Categories } from "../data/index";
import Hero from "../assets/Hero.png";
import InfoSection from "./InfoSection";
import Category from "./Category";
import Products from "./Products";
import Shop from "./Shop";

const Home = () => {
  return (
    <>
      <div className="bg-white mt-2 px-4 md:px-16 lg:px-24 container mx-auto py-4 flex flex-col md:flex-row gap-6 md:space-x-2 ">
        <div className="w-full md:w-1/2">
          <div>
            <h1 className="bg-salmonPink text-white text-lg text-center font-bold px-2 py-2.5">
              Shop by categories
            </h1>
          </div>
          <div>
            <ul className="space-y-4 bg-salmonPinkLight p-3 py-3.5 border">
              {Categories.map((category, idx) => (
                <li key={idx} className="flex items-center text-sm font-medium">
                  <div className="w-3 h-3 rounded-full border border-salmonPink mr-3"></div>
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full">
          <img
            className="transform transition duration-300 hover:scale-105"
            src={Hero}
            alt="Hero Image"
          />
        </div>
      </div>
      <InfoSection />
      <Category />
      <Products />
      <Shop />
    </>
  );
};

export default Home;
