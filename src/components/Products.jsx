import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/productSlice";
import { productsData } from "../data";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(setProducts(productsData));
  }, [dispatch]);

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product)); // Uncomment if you have addToCart action defined
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-center text-4xl font-semibold my-8 uppercase">
        Top Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {products &&
          products.slice(0, 5).map((product) => (
            <div
              className="bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105"
              key={product.id}
            >
              <Link to={`/product/${product.id}`}>
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
              </Link>
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
    </div>
  );
};

export default Products;
