import React from 'react';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

const Trial = ({ item, incrementItem, decrementItem }) => {
  // Check if item exists before rendering
  if (!item) {
    return <div>No item found</div>;
  }

  return (
    <div>
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
  );
};

export default Trial;
