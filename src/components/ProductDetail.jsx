import React, { useEffect, useState } from "react";
import { FaCarSide, FaQuestion } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";

export const ProductDetail = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.product.products);
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
    // alert("Product Added Successfully");
  };

  useEffect(() => {
    if (products.length > 0) {
      const newProduct = products.find(
        (product) => product.id === parseInt(id)
      );
      setProduct(newProduct);
    }
  }, [id, products]);

  if (!product)
    return (
      <div className="h-96 flex justify-center items-center">
        <span className="text-3xl text-salmonPink">Loading....</span>
      </div>
    );

  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row gap-x-16">
        <div className="md:w-1/2 py-4 shadow-md md:px-8 h-96 flex justify-center transform transition-transform duration-300 hover:scale-105 cursor-pointer">
          <img src={product.image} alt={product.name} className="h-full" />
        </div>

        <div className="md:w-1/2 p-4 shadow-md md:p-16 flex flex-col items-center gap-y-2 mt-5 md:mt-0 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
          <h2 className="text-3xl font-semibold mb-2">{product.name}</h2>
          <p className="text-xl font-semibold text-gray-800 mb-4">
            ${product.price}
          </p>

          <div className="flex items-center mb-4 gap-x-2">
            <input
              type="number"
              id="quantity"
              min="1"
              className="border p-1 w-16 focus:outline-none focus:border-gray-600"
            />
            <button
              className="bg-salmonPink text-white py-1.5 px-4 hover:bg-salmonPinkLight hover:text-black font-bold text-lg rounded-md"
              onClick={(e) => handleAddToCart(e, product)}
            >
              Add To Cart
            </button>
          </div>
          <div className="flex flex-col gap-y-4 mt-4">
            <p className="flex items-center">
              <FaCarSide className="mr-1" /> Delivery & Return
            </p>

            <p
              className="flex items-center"
              onClick={() => navigate("/contact")}
            >
              <FaQuestion className="mr-1" /> Ask a Question
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-2">Product Description</h3>
        <p>{product.desc}</p>
      </div>
    </div>
  );
};
