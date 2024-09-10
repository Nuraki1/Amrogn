import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  './CartDropdown';
// import './ThemeToggle';

import telebirr from "../images/payment/telebirr.jpeg"
import cbebirr from "../images/payment/cbe.png"
import apollo from "../images/payment/apollo.jpeg"
import cash from "../images/payment/cash.png"
import pos from "../images/payment/pos.png"


const PaymentPage = ({totalPrice}) => {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
    const navigate = useNavigate();

  const paymentMethods = [
    { id: 'cashondelivery', name: 'Cash', color: 'bg-blue-500', image: cash },
    { id: 'telebirr', name: 'Telebirr', color: 'bg-pink-500', image:telebirr },
    { id: 'cbebirr', name: 'CBE birr', color: 'bg-orange-500', image: cbebirr },
    // { id: 'hellocash', name: 'Hello Cash', color: 'bg-purple-500', image: '/path_to_rocket_icon.png' },
    { id: 'apollo', name: 'Apollo', color: 'bg-yellow-500', image: apollo },
    { id: 'Posmachine', name: 'POS machine', color: 'bg-red-500', image: pos }
  ];

  const handlePaymentSelection = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handleBackToMainPage = () => {
    navigate('/Amrogn'); // Navigate to the main page
  };

  return (
    <>
   
 <div className="p-4 bg-gray-100 dark:bg-gray-800 min-h-screen">

  <div className=''>      
      <div className="mb-4">
        <button
          onClick={handleBackToMainPage}
          className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
        >
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
         
        </button>
      </div>

      {/* Payment Methods Title */}
      {/* <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Payment Methods</h2> */}
      <div className="bg-customRed text-white text-lg font-semibold p-4 rounded-md shadow mb-6">

        <p>Order Total</p>
        <p> {totalPrice.toFixed(2)} ETB</p>
      </div>
      
      <h2 className="text-2xl text-gray-700 dark:text-gray-100 font-semibold mb-4">Select Payment Method</h2>
</div>
      <div className="space-y-4">
        {paymentMethods.map((method) => (
          <div 
            key={method.id} 
            onClick={() => handlePaymentSelection(method.id)}
            className={`flex items-center justify-between p-4 border rounded-lg shadow cursor-pointer ${
              selectedPaymentMethod === method.id ? 'border-customRed bg-gray-200 dark:bg-gray-700' : 'bg-white dark:bg-gray-900'
            }`}
          >
            <div className="flex items-center ">
              <img src={method.image} alt={method.name} className="w-10 h-10 mr-4" />
              
              <span className="text-lg font-medium text-gray-700 dark:text-gray-100">{method.name}</span>
            </div>
            <div>
              <input
                type="radio"
                name="paymentMethod"
                checked={selectedPaymentMethod === method.id}
                onChange={() => handlePaymentSelection(method.id)}
                className="form-radio text-customRed"
              />
            </div>
          </div>
        ))}
        
      </div>
      
    </div>
    <button className="flex items-center justify-center p-5 m-5 bg-green-500 dark:bg-gray-800 ">
       pay
      </button>

    </>
  );
};

export default PaymentPage;
