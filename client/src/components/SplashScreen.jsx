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
      <>
      <div className="fixed inset-0 bg-customYellow flex flex-col items-center justify-center z-50">
        <div className="text-gray text-1xl font-bold   ">
          <img src={splash} alt="App Logo" className="w-40 h-40" />
          <p>We Speak Chicken</p>
        </div>


        <div className="absolute bottom-4 m:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-900 sm:text-center dark:text-gray-900">© 2024 <a href="https://EtcodeX.com/" className="hover:underline">ETcodeX™</a>. All Rights Reserved.
          <div className="text-sm text-gray-900 sm:text-center dark:text-gray-900">Developed By CEO of ETcodeX - <a href='linkedin.com/in/akrem-beshir-a0651521a'>Akrem Beshir</a> </div>
          </span>
      </div>
      </div>

      
      
      </>
      
    )
  );
};

export default SplashScreen;
