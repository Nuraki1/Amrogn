import React from "react";
import Categories from "./components/Categories.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx"
import Front from "./components/Front.jsx";
import PopularMenu from "./components/PopularMenu.jsx";
import { Example } from "./components/Example.jsx";
import Footer from "./components/Footer.jsx";
import MenuList from "./components/MenuList.jsx";
import SpinningLogos from "./components/spinningLogos.jsx"
// import locali

import burgerImage from "./images/burger.png";
import friesImage from "./images/fries.png";
import takeAway from "./images/takeAway.png";
import extra from "./images/extra.png";
import salad from "./images/salad.png";
import strawberry from "./images/strawberry.png";
import soft from "./images/cola.png";
import Chicken from "./images/logos.png";
import shawarma from "./images/menu/shawarma.png";
import './App.css';

const categoryData = [
  { image: Chicken, name: "Chicken",link:"#chicken" },
  { image: shawarma, name: "Shawarma", link:"#shawarma" },
  { image: burgerImage, name: "Burger", link:"#burger" },
  { image: salad, name: "Salad", link:"#salad" },
  { image: friesImage, name: "Fries", link:"#extras" },
  { image: soft, name: "Soft Drinks", link:"#juice" },
  { image: strawberry, name: "Juice", link:"#juice" },
  { image: extra, name: "Extra", link:"#extras" },
  { image: takeAway, name: "TakeAway", link:"#takeaway" },
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

        {/* <div>
          <SpinningLogos/>
        </div> */}

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
