import React, { useState } from "react";
import EmptyCart from "../assets/EmptyCart.png";
import { useDispatch, useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import Modal from "./Modal";
import ChangeAddress from "./ChangeAddress";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [address, setAddress] = useState("Lahore, Punjab, Pakistan");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalAmount = cart.products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      {cart.products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold mb-4">SHOPPING CART</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="border-b">
                    <th className="text-left px-4 py-2">PRODUCTS</th>
                    <th className="px-4 py-2 text-center">PRICE</th>
                    <th className="px-4 py-2 text-center">QUANTITY</th>
                    <th className="px-4 py-2 text-center">SUBTOTAL</th>
                    <th className="px-4 py-2 text-center">REMOVE</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.products.map((product) => (
                    <tr key={product.id} className="border-b">
                      <td className="flex flex-col items-start pl-5">
                        <img
                          src={product.image}
                          alt="Product Image"
                          className="w-16 h-16 object-contain rounded mb-2"
                        />
                        <h3 className="text-lg font-semibold text-center">
                          {product.name}
                        </h3>
                      </td>

                      <td className="text-center px-4 py-2">
                        ${product.price}
                      </td>
                      <td className="text-center px-4 py-2">
                        <div className="flex justify-center items-center space-x-2">
                          <button
                            className="text-xl font-bold px-1.5 border-r"
                            onClick={() =>
                              dispatch(decreaseQuantity(product.id))
                            }
                          >
                            -
                          </button>
                          <p>{product.quantity}</p>
                          <button
                            className="text-xl font-bold px-1.5 border-l"
                            onClick={() =>
                              dispatch(increaseQuantity(product.id))
                            }
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="text-center px-4 py-2">
                        ${(product.quantity * product.price).toFixed(2)}
                      </td>
                      <td className="text-center px-4 py-2">
                        <button
                          className="text-salmonPink"
                          onClick={() => dispatch(removeFromCart(product.id))}
                        >
                          <FaTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-7">
            <h3 className="text-2xl font-semibold mb-4">CART TOTAL</h3>
            <div className="flex justify-between items-center mb-2 pb-3 border-b">
              <p className="text-gray-600">Total Items</p>
              <p className="font-semibold">{cart.totalQuantity}</p>
            </div>

            <div className="pb-3 border-b">
              <p className="text-gray-600">Shipping:</p>
              <p className="text-gray-600 ml-3">
                shipping to -{" "}
                <span className="text-left font-bold">{address}</span>
              </p>
              <button
                className="text-salmonPink text-lg font-normal pt-2"
                onClick={() => setIsModalOpen(true)}
              >
                Change Address
              </button>
            </div>

            <div className="flex justify-between items-center mb-8 pt-3">
              <p className="text-gray-600">Total Price</p>
              <p className="font-semibold">${totalAmount.toFixed(2)}</p>
            </div>

            <button
              className="w-full bg-salmonPink text-white py-2 rounded-md hover:bg-salmonPinkLight hover:text-black transition font-bold text-lg"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>
          </div>
          <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
            <ChangeAddress
              setAddress={setAddress}
              setIsModalOpen={setIsModalOpen}
            />
          </Modal>
        </div>
      ) : (
        <div className="flex justify-center">
          <img
            src={EmptyCart}
            alt="EmptyCart Image"
            className="h-96 object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default Cart;
