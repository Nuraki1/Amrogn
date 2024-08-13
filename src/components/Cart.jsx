import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./Cart.css"; // Assuming you have a CSS file named Cart.css
import CartDropdown from './CartDropdown';

const Cart = ({counter, cartItems, totalPrice}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
      };
  return (
    <div className="relative inline-block">
      <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
        {counter}
      </span>
      <button onClick={toggleDropdown} className="p-2 dark:bg-gray-800 rounded-full flex items-center justify-center">
        <FaShoppingCart />
      </button>
      {isDropdownOpen && <CartDropdown cartItems={cartItems} totalPrice={totalPrice} />}
    </div>
  );
};

export default Cart;
