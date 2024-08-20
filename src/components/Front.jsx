// src/pages/Front.jsx
import React, { useState } from 'react';
import Logo from '../images/mainLogo2.png';
// import bgImage2 from '../images/bgMukera1.jpg'
import { FaUserFriends } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import LocalizationToggle from '../components/LocalizationToggle.jsx';
import './ServiceCard.css';
import beu from "../images/beu-removed.png"

import '../App.css';
import { Place } from '@mui/icons-material';

const Front = () => {
  const [isEnglish, setIsEnglish] = useState(true);

  const handleLanguageChange = (language) => {
    setIsEnglish(language);
  };

  return (
    <>
  
    <div className="bg-customCream dark:bg-gray-900 text-black dark:text-white min-h-screen p-8"
    >
         <div className="ml-3 mt-0 md:mt-0">
            <LocalizationToggle onLanguageChange={handleLanguageChange} />
          </div>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2">
          <img src={Logo} alt="Delivery" className="w-full h-auto dark:bg-gray-900" />
        </div>
        <div className="text-center md:text-left mb-8 md:mb-0 md:w-1/2">
          <h1 className="poppins-extrabold text-4xl font-bold mb-4">
            {isEnglish ? 'Super Fast' : 'ፈጣን'}{' '}
            <span className="text-customRed dark:text-red-400">{isEnglish ? 'Service' : 'መስተንግዶ'}</span> {isEnglish ? 'Order Now' : 'ባሉበት ሆነው ይዘዙን'}
          </h1>
        </div>
       
      </div>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <ServiceCard
          title={isEnglish ? "Online Order" : "ኦንላይን ትዕዛዝ"}
          description={isEnglish ? "Online Ordering" : "ኦንላይን ላይ ይዘዙ "}
          badgeText={
            
            <span className='badge-content'>

              {isEnglish ? "Coming Soon" : "በቅርቡ"} <FaLock style={{ marginLeft: '8px' }} />
            </span>
            
          
          }
          
          
        />
        <ServiceCard
          title={isEnglish ? "Available on beU" : "beU ላይ እንገኛለን"}
          description={isEnglish ? "For Fast Delivery" : "ለፈጣን አድራሽ"}
          badgeText={isEnglish ? "Delivery" : "መላኪያ"}
          link="https://instagram.fadd1-1.fna.fbcdn.net/v/t39.30808-6/384736789_17975076464568831_4325980684139093268_n.jpg?stp=dst-jpg_e35_s1080x1080_sh0.08&_nc_ht=instagram.fadd1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=HG_m_S3_6mAQ7kNvgH7L4UM&gid=65e1c0f8a05f41c2a351f3ec94de8fb7&edm=ANTKIIoAAAAA&ccb=7-5&oh=00_AYDWP73AUHB5u0Tr3WG7RhmpkaKs615ZTgA1j57CwuFNXw&oe=66B095DC&_nc_sid=d885a2"
          // logo={beu}
        />
        <ServiceCard
          title={isEnglish ? "We Are Anywhere" : "በብዙ ቦታዎች እንገኛለን"}
          description={isEnglish ? "6+ branches" : "ከ 6+ ቅርንጫፎች"}
          badgeText={isEnglish ? "Places" : "ቅርንጫፍ"}
          link="#footer"
          // logo={Place}
        />
        <ServiceCard
          title={isEnglish ? "Contact Us" : "በዚ ቁጥር ያግኙን "}
          description={isEnglish ? "Call & Order Now" : "ደውለው ይዘዙ"}
          badgeText={isEnglish ? "Contact" : "ስልክ"}
          link="#footer"
          // logo={contact}
        />
      </div>
    </div>
    </>
  );
};

const ServiceCard = ({ title, description, badgeText, link, logo }) => {
  return (
    <a href={link} className="block transform transition-transform hover:scale-105">
    <div className="relative bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl text-center">
      <div className="absolute top-0 left-0 border-black bg-customRed dark:bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
        {badgeText}
      </div>
      <h2 className="text-lg font-semibold mb-2 mt-2">{title}</h2>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
      {/* <div className="stamp-container">
        <img src={logo} alt="Logo" className="stamp-logo" />
      </div> */}
    </div>
  </a>
   
  );
};

export default Front;
