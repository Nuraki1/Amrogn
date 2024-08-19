import React, { useState, useEffect, useRef } from "react";
import { FaShoppingCart } from "react-icons/fa";
import CartDropdown from './CartDropdown';

const Cart = ({ counter, cartItems, totalPrice, incremental, decremental }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cartRef = useRef(null); // Create a reference for the cart

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close the cart when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cartRef]);

  return (
    <div className="relative inline-block" ref={cartRef}>
      <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
        {counter}
      </span>
      <button onClick={toggleDropdown} className="p-2 dark:bg-gray-800 rounded-full flex items-center justify-center">
        <FaShoppingCart />
      </button>
      {isDropdownOpen && <CartDropdown cartItems={cartItems} totalPrice={totalPrice} onClose={toggleDropdown} incremental= {incremental} decremental={decremental} />}
    </div>
  );
};

export default Cart;
