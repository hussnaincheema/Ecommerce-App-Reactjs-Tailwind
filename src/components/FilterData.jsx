import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import NoProduct from "../assets/noproduct.png";
import { addToCart } from "../redux/cartSlice";

const FilterData = () => {
  const filterProducts = useSelector((state) => state.product.filteredData);
  const dispatch = useDispatch();

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
    // alert("Product Added Successfully");
  };

  return (
    <div className="container mx-auto py-8 px-4">
      {filterProducts.length > 0 ? (
        <>
          <h2 className="text-center text-4xl font-semibold my-8 uppercase">
            Shop
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filterProducts.map((product) => (
              <div
                className="bg-white max-w-xs p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105 mx-auto"
                key={product.id}
              >
                <img
                  className="w-full h-48 object-contain mb-4"
                  src={product.image}
                  alt="Product Images"
                />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-salmonPink mb-10">$ {product.price}</p>
                <div className="flex items-center mt-2">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>

                <div
                  className="absolute bottom-3 right-2 flex items-center justify-center w-8 h-8 bg-salmonPinkLight group text-white text-sm rounded-full hover:w-32 hover:bg-salmonPink transition-all"
                  onClick={(e) => handleAddToCart(e, product)}
                >
                  <span className="group-hover:hidden text-black font-bold text-lg">
                    +
                  </span>
                  <span className="hidden group-hover:flex justify-center items-center w-full h-full text-black font-bold">
                    Add to Cart
                  </span>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center">
          <img src={NoProduct} alt="No Product" />
        </div>
      )}
    </div>
  );
};

export default FilterData;
