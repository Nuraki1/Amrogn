import React from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const CartDropdown = ({ cartItems, totalPrice, onClose, incremental, decremental }) => {
    
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/payment"); // Navigate to the PaymentPage when Pay is clicked
      };
    

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="relative right-0 mt-1 w-64 bg-customCream dark:bg-gray-800 rounded-lg shadow-lg p-4 z-50">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-md font-semibold">Cart</h2>
        </div>
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-red-500 focus:outline-none">
          <AiOutlineClose size={20} />
        </button>
        <div className="flex justify-center mb-4">
          <button className="bg-red-500 text-white px-4 py-1 rounded-l-full focus:outline-none">
            Food
          </button>
          <button className="bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-4 py-1 focus:outline-none">
            Drink
          </button>
          <button className="bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-4 py-1 rounded-r-full focus:outline-none">
            Takeaway
          </button>
        </div>
        <div className="bg-customCream">Your order is empty</div>
      </div>
    );
  }

  return (
    <div className="relative right-0 mt-2 w-80 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-4 z-50">
      <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-red-500 focus:outline-none">
        <AiOutlineClose size={20} />
      </button>
      <h2 className="text-lg font-semibold pb-4">Cart</h2>
      <div className="flex justify-between items-center mb-4">
        <div className="flex justify-center mb-4">
          <button className="bg-red-500 text-white px-4 py-1 rounded-l-full focus:outline-none">
            Food
          </button>
          <button className="bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-4 py-1 focus:outline-none">
            Drink
          </button>
          <button className="bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-4 py-1 rounded-r-full focus:outline-none">
            Takeaway
          </button>
        </div>
      </div>

      <div className="max-h-48 overflow-y-auto bg-customCream dark:bg-gray-700 p-3">
        {cartItems.map((item) => (
          <div key={item.name} className="flex items-center justify-between mb-4 border-b pb-2">
            <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-md mr-2" />
            <div className="flex-grow">
              <p className="text-sm font-semibold">{item.name}</p>
              <p className="text-xs text-gray-500">{item.description}</p>
              <div className="flex items-center mt-1">
                <button 
                className="text-gray-500 bg-gray-200 dark:bg-gray-700 p-1 rounded-full focus:outline-none"
                onClick={() => decremental(item)}>
                  <FaMinusCircle className="text-red-500" />
                </button>
                <span className="mx-2 text-sm">{item.quantity}</span>
                <button className="text-gray-500 bg-gray-200 dark:bg-gray-700 p-1 rounded-full focus:outline-none"
                onClick={() => incremental(item)}>
                  <FaPlusCircle className="text-green-500" />
                </button>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-xs text-gray-500">{item.quantity} x {item.price} br</p>
              <p className="text-sm font-semibold">{item.quantity * item.price} br</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 border-t pt-4">
        <p className="text-lg font-semibold">Total: {totalPrice} br</p>
        <button onClick={handleClick} className="absolute bottom-4 right-6 px-4 py-2 rounded-md flex items-center justify-center bg-customRed dark:bg-red-700 text-white hover:bg-red-600">
          Pay
        </button>
      </div>
    </div>
  );
};

export default CartDropdown;
