import React from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const CartDropdown = ({
  cartItems,
  incrementItem,
  decrementItem,
  totalPrice,
}) => {
  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="poppins-regular relative right-0 mt-1 w-64 bg-customCream dark:bg-gray-800 rounded-lg shadow-lg p-4 z-50">
        Your cart is empty
      </div>
    );
  }

  return (
    <div className="relative right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 z-50">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Cart</h2>
        <p className="text-xs text-gray-500">Order ID: #1099</p>
      </div>

      <div className="flex justify-center mb-4">
        <button className="bg-red-500 text-white px-4 py-2 rounded-l-full focus:outline-none">
          Delivery
        </button>
        <button className="bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-4 py-2 focus:outline-none">
          Dine In
        </button>
        <button className="bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-4 py-2 rounded-r-full focus:outline-none">
          Takeaway
        </button>
      </div>

      {cartItems.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between mb-4 border-b pb-2"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-12 h-12 object-cover rounded-md mr-2"
          />
          <div className="flex-grow">
            <p className="text-sm font-semibold">{item.name}</p>
            <p className="text-xs text-gray-500">{item.description}</p>
            <div className="flex items-center mt-1">
              <button
                onClick={() => decrementItem(item)}
                className="text-gray-500 bg-gray-200 dark:bg-gray-700 dark:text-gray-400 p-1 rounded-full focus:outline-none"
              >
                <FaMinusCircle className="text-red-500" />
              </button>

              <span className="mx-2 text-sm">{item.quantity}</span>

              <button
                onClick={() => incrementItem(item)}
                className="text-gray-500 bg-gray-200 dark:bg-gray-700 dark:text-gray-400 p-1 rounded-full focus:outline-none"
              >
                <FaPlusCircle className="text-green-500" />
              </button>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-xs text-gray-500">
              {item.quantity} x {item.price} br
            </p>
            <p className="text-sm font-semibold">
              {item.quantity * item.price} br
            </p>
          </div>
        </div>
      ))}

      <div className="mt-4 border-t pt-4">
        <p className="text-lg font-semibold">Total: {totalPrice} br</p>
      </div>
    </div>
  );
};

export default CartDropdown;
