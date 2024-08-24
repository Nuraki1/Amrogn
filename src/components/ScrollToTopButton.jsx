import React, { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-customRed text-white p-3 rounded-full shadow-md hover:bg-blue-700 transition duration-300 ease-in-out animate-bounce"
        >
          <FaAngleUp className="w-4 h-4" />
        </button>
      )}
    </>
  );
}

export default ScrollToTopButton;
