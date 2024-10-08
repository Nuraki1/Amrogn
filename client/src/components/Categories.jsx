import React, { useRef, useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa"; // Import icon for "View More" button
import ThemeToggle from "../components/ThemeToggle.jsx";
import Cart from "../components/Cart.jsx"
import { FaShoppingCart } from "react-icons/fa";




import "../App.css";
import { useNavigate } from 'react-router-dom';

// const CategoryCard = ({ image, name, link }) => {
//   return (
//     <div className="flex flex-col items-center">
//       {/* <p className="mt-2 mb-0 text-center text-sm text-white">{name}</p> */}
//       <div className="bg-gray-900 dark:bg-gray-600 rounded-full p-3 w-16 h-16 flex items-center justify-center">
//         <img src={image} alt={name} className="w-15 h-15 object-contain" />
//       </div>
//     </div>
//   );
// };


const CategoryCard = ({ image, name, link }) => {
  // const navigate = useNavigate();

  return (
   <a href={link}>
      <div className="bg-gray-900 dark:bg-gray-600 rounded-full p-3 w-16 h-16 flex items-center justify-center">
        <img src={image} alt={name} className="w-15 h-15 object-contain" />
      </div>
      {/* <p className="mt-2 mb-0 text-center text-sm text-gray-800">{name}</p> */}
    </a>
  );
};


const Categories = ({ categories }) => {
  const scrollRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [height, setHeight] = useState("h-48");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
        setHeight("h-24");
      } else {
        setIsSticky(false);
        setHeight("h-48");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div
      className={`p-4 dark:bg-gradient-to-br dark:from-black dark:to-customRed bg-gradient-to-br from-customRed to-customYellow shadow-lg text-gray-900 dark:text-gray-100 ${
        isSticky ? "fixed top-0 left-0 w-full z-50 transition-all" : "relative"
      } ${height} transition-all duration-300`}
    >
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl poppins-semibold">Categories</h2>
        </div>
        <span>
          <ThemeToggle />
        </span>

        {/* <div >
          <Cart />
        </div> */}

        <button
          className="flex items-center space-x-2 text-white hover:text-white"
          onClick={() => scroll(200)}
        >
          <span>View More</span>
          <FaArrowRight />
        </button>
      </div>

      <div className="flex overflow-x-hidden relative">
        <div
          ref={scrollRef}
          className="flex space-x-4 pb-4 overflow-x-auto scroll-smooth"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              image={category.image}
              name={category.name}
              link={category.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
