import React, { useEffect, useState } from 'react';
// import './splash.css'; // Ensure this path is correct for your setup
import splash from "../images/mainLogo2.png"
const SplashScreen = ({ onHide }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set a timer to hide the splash screen after 3 seconds (3000ms)
    const timer = setTimeout(() => {
      setIsVisible(false);
      onHide(); // Notify the parent component to render the main content
    }, 3000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [onHide]);

  return (
    isVisible && (
      <div className="fixed inset-0 bg-customYellow flex items-center justify-center z-50">
        <div className="text-gray poppins-regular text-1xl font-bold   ">
          <img src={splash} alt="App Logo" className="w-40 h-40" />
          <p>We Speak Chicken</p>
        </div>
      </div>
    )
  );
};

export default SplashScreen;
