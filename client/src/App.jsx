import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom"; // Updated import
import Categories from "./components/Categories.jsx";
import Front from "./components/Front.jsx";
import PopularMenu from "./components/PopularMenu.jsx";
import { Example } from "./components/Example.jsx";
import Footer from "./components/Footer.jsx";
import MenuList from "./components/MenuList.jsx";
import Cart from "./components/Cart.jsx";
import CartDropdown from "./components/CartDropdown.jsx";
import SplashScreen from "./components/SplashScreen.jsx";
import PaymentPage from "./components/PaymentPage.jsx"; // Import the PaymentPage

import burgerImage from "./images/burger.png";
import friesImage from "./images/fries.png";
import takeAway from "./images/takeAway.png";
import extra from "./images/extra.png";
import salad from "./images/salad.png";
import strawberry from "./images/strawberry.png";
import soft from "./images/cola.png";
import Chicken from "./images/logos.png";
import shawarma from "./images/menu/shawarma.png";

import "./App.css";
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";

const categoryData = [
  { image: Chicken, name: "Chicken", link: "#chicken" },
  { image: shawarma, name: "Shawarma", link: "#shawarma" },
  { image: burgerImage, name: "Burger", link: "#burger" },
  { image: salad, name: "Salad", link: "#salad" },
  { image: friesImage, name: "Fries", link: "#extras" },
  { image: soft, name: "Soft Drinks", link: "#juice" },
  { image: strawberry, name: "Juice", link: "#juice" },
  { image: extra, name: "Extra", link: "#extras" },
  { image: takeAway, name: "TakeAway", link: "#takeaway" },
];

const App = () => {
  const [counter, setCounter] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSplashVisible, setIsSplashVisible] = useState(true); 
  


  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const incremental = (item) => {
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem.name === item.name
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };



  const decremental = (item) => {
    setCartItems((prevCartItems) => {
      return prevCartItems
        .map((cartItem) =>
          cartItem.name === item.name && cartItem.quantity > 0
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0);
    });
  };
  

  const incrementCounter = (item) => {
    setCounter(counter + 1);
    const existingItem = cartItems.find((cartItem) => cartItem.name === item.name);

    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const decrementCounter = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.name === item.name);
    if (existingItem.quantity === 1) {
      const updatedCartItems = cartItems.filter((cartItem) => cartItem.name !== item.name);
      setCartItems(updatedCartItems);
      setCounter(counter - 1);
    } else {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.name === item.name
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
      setCartItems(updatedCartItems);
      setCounter(counter - 1);
    }
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleSplashHide = () => {
    setIsSplashVisible(false);
  };

  
  return (
  
      <Routes>
        <Route
          path="/Amrogn"
          element={
            isSplashVisible ? (
              <SplashScreen onHide={handleSplashHide} />
            ) : (
              <div className="relative">
                <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
                  <Front />

                  <div className="sticky-categories">
                    <Categories categories={categoryData} />
                  </div>

                  <PopularMenu
                    incrementCounter={incrementCounter}
                    decrementCounter={decrementCounter}
                  />

                  <MenuList
                    incrementCounter={incrementCounter}
                    decrementCounter={decrementCounter}
                  />

                  <div className="fixed bottom-0 left-0 m-4">
                    <Cart
                      counter={counter}
                      cartItems={cartItems}
                      totalPrice={totalPrice}
                      incremental={incremental}
                      decremental={decremental}
                    />
                  </div>

                  {isDropdownOpen && (
                    <CartDropdown
                      cartItems={cartItems}
                      incremental={incremental}
                      decremental={decremental}
                      totalPrice={totalPrice}
                      onClose={handleToggleDropdown}
                      // onPay={handlePayClick} // Pass the handlePayClick function
                    />
                  )}

                  <Footer />
                  <ScrollToTopButton />
                </div>
                  <Example />
              </div>
            )
          }
        />
        <Route path="/payment" element={<PaymentPage cartItems={cartItems} totalPrice={totalPrice} />} />
      </Routes>
   
  );
};

export default App;
