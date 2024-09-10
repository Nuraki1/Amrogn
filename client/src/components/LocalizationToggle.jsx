// src/components/LocalizationToggle.jsx
import React, { useState } from 'react';
import et from '../images/circle.png';
import us from '../images/us.png';

const LocalizationToggle = ({ onLanguageChange }) => {
  const [isEnglish, setIsEnglish] = useState(true);

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
    onLanguageChange(!isEnglish);
  };

  return (
    <button
      className="bg-gray-200 dark:bg-gray-700 dark:text-white py-1 px-1 rounded-full"
      onClick={toggleLanguage}
    >
      {isEnglish ?  <img src={et} alt="Amharic" className="w-8 h-8" /> :  <img src={us} alt="English" className="w-8 h-8" /> }
    </button>
  );
};

export default LocalizationToggle;
