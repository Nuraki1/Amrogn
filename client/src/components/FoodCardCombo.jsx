import React, { useState, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import { MdRestaurant } from 'react-icons/md';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // Import the skeleton styles

const FoodCardCombo = ({ image, name, price, size, rating, badgeText, incrementCounter, decrementCounter }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state for skeleton

  const handleToggle = () => {
    if (isAdded) {
      decrementCounter(); // Decrease the counter
    } else {
      incrementCounter(); // Increase the counter
    }
    setIsAdded(!isAdded); // Toggle the added state
  };

  // Simulate loading for 2 seconds (you can replace this with actual data fetching logic)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 2 seconds
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white rounded-lg shadow-lg p-6 mb-6 max-w-xl flex items-center relative">
      {/* Image Section */}
      <div className="flex-shrink-0">
        {loading ? (
          <Skeleton circle={true} height={112} width={112} className="mx-auto" /> // Centered skeleton
        ) : (
          <img
            src={image}
            alt={name}
            className="w-28 h-28 object-cover rounded-full mx-auto"
          />
        )}
      </div>

      {/* Text Section */}
      <div className="ml-6 flex-grow">
        <h2 className="text-xl font-semibold">
          {loading ? <Skeleton width={120} /> : name}
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          {loading ? <Skeleton width={80} /> : size}
        </p>
        <p className="text-xl font-bold mt-2">
          {loading ? <Skeleton width={60} /> : `${price} br`}
        </p>

        {/* Rating Stars */}
        <div className="flex mt-2">
          {loading ? (
            <Skeleton width={100} height={20} />
          ) : (
            [...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < rating ? 'text-customRed' : 'text-gray-300 dark:text-gray-600'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.959a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.367 2.447a1 1 0 00-.364 1.118l1.286 3.96c.3.921-.755 1.688-1.54 1.118l-3.367-2.447a1 1 0 00-1.176 0l-3.367 2.447c-.784.57-1.839-.197-1.54-1.118l1.286-3.96a1 1 0 00-.364-1.118L2.61 9.386c-.784-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.959z" />
              </svg>
            ))
          )}
        </div>
      </div>

      {/* Add to Cart Button */}
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
