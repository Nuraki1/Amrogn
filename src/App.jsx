import React from "react";
import Categories from "./components/Categories.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx"
import Front from "./components/Front.jsx";
import PopularMenu from "./components/PopularMenu.jsx";
import { Example } from "./components/Example.jsx";
import Footer from "./components/Footer.jsx";

import burgerImage from "./images/burger.png";
import friesImage from "./images/fries.png";
import soupImage from "./images/soup.png";
import sandwichImage from "./images/sandwich.png";
// import iceCreamImage from "./images/icecream.png";
import cakeImage from "./images/cake.png";
import hot from "./images/coffee.png";
import soft from "./images/cola.png";
import Chicken from "./images/logos.png";
import shawarma from "./images/menu/shawarma.png";
import './App.css';

const categoryData = [
  { image: burgerImage, name: "Burger" },
  { image: Chicken, name: "Chicken" },
  { image: friesImage, name: "Fries" },
  { image: soupImage, name: "Soup" },
  { image: sandwichImage, name: "Sandwich" },
  { image: shawarma, name: "Sawarma" },
  { image: cakeImage, name: "Cake" },
  { image: hot, name: "Hot Drinks" },
  { image: soft, name: "Soft Drinks" },
];

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <div className="flex justify-start p-4">
          <ThemeToggle />
        </div>

        <div>
          <Front />
        </div>

        <div className="sticky-categories">
          <Categories categories={categoryData} />
        </div>

        <div>
          <PopularMenu />
        </div>

        <Example />

        <Footer/>
      </div>
    </>
  );
};

export default App;
