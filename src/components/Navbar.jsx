import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Modal from "./Modal";
import { setSearchTerm } from "../redux/productSlice";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openSignUp = () => {
    setIsLogin(false);
    setIsModalOpen(true);
  };

  const openLogin = () => {
    setIsLogin(true);
    setIsModalOpen(true);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(search));
    setSearch("");
    navigate("/filter-data");
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        <div className="text-lg font-bold text-salmonPink">
          <Link to="/">E-Shop</Link>
        </div>
        <div className="relative flex-1 mx-4">
          <form onSubmit={handleSearch}>
            <input
              className="w-full border py-2 px-4 focus:outline-none"
              type="text"
              placeholder="Search Product"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <FaSearch className="absolute top-3 right-3 text-salmonPink" />
          </form>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-lg text-salmonPink" />
            {products.length > 0 && (
              <span className="absolute bottom-3 text-xs w-6 h-6 left-3 bg-salmonPink rounded-full flex justify-center items-center text-white font-bold">
                {products.length}
              </span>
            )}
          </Link>
          <div onClick={() => setIsModalOpen(true)}>
            <button className="hidden md:block">Login | Register</button>
            <button className="block md:hidden">
              <FaUser className="text-salmonPink" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold">
        <Link
          to="/"
          className="hover:underline decoration-salmonPink decoration-2 underline-offset-4"
        >
          Home
        </Link>
        <Link
          to="/shop"
          className="hover:underline decoration-salmonPink decoration-2 underline-offset-4"
        >
          Shop
        </Link>
        <Link
          to="/about"
          className="hover:underline decoration-salmonPink decoration-2 underline-offset-4"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="hover:underline decoration-salmonPink decoration-2 underline-offset-4"
        >
          Contact
        </Link>
      </div>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        {isLogin ? (
          <Login openSignUp={openSignUp} />
        ) : (
          <Register openLogin={openLogin} />
        )}
      </Modal>
    </nav>
  );
};

export default Navbar;
