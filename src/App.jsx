import React from "react";
import Categories from "./components/Categories.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx"
import Front from "./components/Front.jsx";
import PopularMenu from "./components/PopularMenu.jsx";
import { Example } from "./components/Example.jsx";
import Footer from "./components/Footer.jsx";
import MenuList from "./components/MenuList.jsx";
// import locali

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
  { image: Chicken, name: "Chicken",link:"#chicken" },
  { image: shawarma, name: "Shawarma", link:"#shawarma" },
  { image: burgerImage, name: "Burger", link:"#burger" },
  { image: friesImage, name: "Fries", },
  { image: soupImage, name: "Soup" },
  { image: sandwichImage, name: "Sandwich" },
  { image: cakeImage, name: "Cake" },
  { image: hot, name: "Hot Drinks" },
  { image: soft, name: "Soft Drinks", link:"soft" },
];

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      

        <div>
          <Front />
        </div>

        <div className="sticky-categories">
          <Categories categories={categoryData} />
        </div>

        <div>
          <PopularMenu />
        </div>

        <div>
          <MenuList/>
        </div>

        <Example />

        <Footer/>
      </div>
    </>
  );
};

export default App;
