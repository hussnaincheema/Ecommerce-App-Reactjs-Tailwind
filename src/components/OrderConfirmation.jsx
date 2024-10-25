import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OrderConfirmation = ({ order }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!order) {
      navigate("/");
    }
  }, [order, navigate]);

  if (!order) {
    return null;
  }

  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
      <h2 className="text-2xl font-semibold mb-4">Thank You for your order</h2>
      <p>
        Your order has been placed successfully, you will receive an email
        confirmation shortly.
      </p>
      <div className="mt-6 p-4 border rounded-lg bg-gray-100">
        <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
        <p className="border-b-2 pb-2">Order Number: {order.orderNumber}</p>

        <div className="mt-4 border-b-2 pb-2">
          <h4 className="text-md font-semibold mb-2">Shipping Information</h4>
          <p>{order.shippingInformation.address}</p>
          <p>{order.shippingInformation.city}</p>
          <p>{order.shippingInformation.zip}</p>
        </div>

        <div className="mt-4 border-b-2 pb-2">
          <h4 className="text-md font-semibold mb-2">Items Ordered</h4>
          <div>
            {order.products.map((product) => (
              <div key={product.id} className="flex justify-between mt-2">
                <span>
                  {product.name} x {product.quantity}
                </span>
                <span>${(product.price * product.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex justify-between border-b-2 pb-2">
          <span>Total Price</span>
          <span className="font-semibold">${order.totalPrice.toFixed(2)}</span>
        </div>

        <div className="mt-6 flex flex-col md:flex-row">
          <button className="bg-salmonPink rounded-md text-white py-2 px-4 mt-3 hover:bg-salmonPinkLight hover:text-black font-bold text-lg">
            Order Tracking
          </button>
          <button
            className="bg-salmonPink rounded-md text-white py-2 px-4 mt-3 md:ml-5 hover:bg-salmonPinkLight hover:text-black font-bold text-lg"
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
