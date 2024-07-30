import React from 'react';
import deliveryImage from '../images/AmrognLogo2.png'; // Adjust the path to your image
import { FaUserFriends } from 'react-icons/fa'; // Import icon for enrollment count
import call from '../images/call.png'
const Front = () => {
  return (
    <div className="bg-customCream dark:bg-gray-900 text-black dark:text-white min-h-screen p-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-8 md:mb-0 md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">We Provide <span className="text-customRed dark:text-red-400">Super Fast</span> Delivery Service</h1>
         
         
            <h1 className="text-4xl font-bold mb-4"> ፈጣን<span className="text-customRed dark:text-red-400"> መስተንግዶ </span>ባሉበት ሆነው ይዘዙን </h1>
        </div>
        <div className="md:w-1/2">
          <img src={deliveryImage} alt="Delivery" className="w-full h-auto dark:bg-gray-900" />
        </div>
      </div>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <ServiceCard title="Online Order" description="Orderly - Ordering Software" badgeText="Orderly" />
        <ServiceCard title="Available on beU" description="For Fast Delivery" badgeText="Delivery"  />
        <ServiceCard title="We Are Any Where" description="8+ branches in Addis" badgeText="Places" />
        <ServiceCard title="Contact Number" description="09" badgeText="contact"  />
      </div>
    </div>
  );
};
const ServiceCard = ({ title, description, badgeText }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center relative">
      <div className="absolute top-0 left-0 border-black bg-customRed dark:bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
        {badgeText}
        
          {/* <img src={call} alt="Badge" className="w-4 h-4 inline-block mr-1" /> */}
      </div>
      <h2 className="text-lg font-semibold mb-2 mt-2">{title}</h2>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};
// const ServiceCard = ({ title, description }) => {
//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md text-center">
//       <h2 className="text-lg font-semibold mb-2">{title}</h2>
//       <p className="text-gray-600">{description}</p>
//     </div>
//   );
// };

export default Front;
