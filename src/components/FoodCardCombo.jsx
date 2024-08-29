import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { MdRestaurant } from 'react-icons/md';

const FoodCardCombo = ({ image, name, price, size, rating, badgeText, incrementCounter, decrementCounter }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleToggle = () => {
    if (isAdded) {
      decrementCounter(); // Decrease the counter
    } else {
      incrementCounter(); // Increase the counter
    }
    setIsAdded(!isAdded); // Toggle the added state
  };

  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white rounded-lg shadow-lg p-4 mb-6 max-w-xl flex items-center relative">
      {/* Image Section */}
      <div className="flex-shrink-0">
        <img
          src={image}
          alt={name}
          className="w-28 h-28 object-cover rounded-full"
        />
      </div>

      {/* Text Section */}
      <div className="ml-6 flex-grow">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-500 text-sm">{size}</p>
        <p className="text-xl font-bold mt-2">{price} br</p>
      </div>

      {/* Button positioned at the bottom-right */}
      <button
        onClick={handleToggle}
        className={`absolute bottom-4 right-4 px-3 py-2 rounded-md flex items-center justify-center ${
          isAdded
            ? 'bg-customYellow dark:bg-customYellow text-gray-800 dark:text-gray-800'
            : 'bg-customRed dark:bg-red-700 text-white hover:bg-red-600'
        }`}
      >
        {isAdded ? <FaCheck /> : <MdRestaurant />}
      </button>
    </div>
  );
};

export default FoodCardCombo;
