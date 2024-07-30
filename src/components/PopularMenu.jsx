import React from 'react';
import FoodCard from './FoodCard';
import bgImage from '../images/yellowPaint.jpg'
import ChickenBurger from '../images/menu/chickenBurger.png';
import roastedChicken from '../images/menu/roastedChicken.png';
import Shawarma from '../images/menu/chickenShawarma.png';
import FriedChicken from '../images/menu/friedChicken.png';
import ChickenKabsa from '../images/menu/chickenKabsa.png';
import ChickenWing from '../images/menu/wingss.png';
import ChickenMofo from '../images/menu/chickenMofo.png';
import GilledChicken from '../images/menu/grilledChicken.png';
import ShawarmaPlate from '../images/shawarmaPlate2.png';
// import Shawarma from '../images/shawarma2.png';

import { FaBook } from 'react-icons/fa'; // Import the FaBook icon



const PopularMenu = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-10 "
    style={{
        backgroundImage: `url(${bgImage})`,
       
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 0,
      }}>

    {/* <div className="w-full mb-8">
      <h2 className="text-3xl font-bold dark:text-black">Our Popular Menu</h2>
    </div> */}
    {/* Head of the menu */}

<div className="w-full mb-8 relative">
  <h2 className="text-3xl font-bold dark:text-white text-center relative z-10 inline-block font-mono bg-black text-transparent bg-clip-text">
    Our Popular Menu
  </h2>
  <div className="absolute top-0 left-0 right-0 h-full flex items-center justify-center">
    {/* <div className="w-24 h-1 bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 rounded-full shadow-lg"></div> */}
  </div>
  <div className="absolute top-0 right-0 transform translate-x-3 translate-y-3 animate-bounce">
    <FaBook className="w-6 h-6 text-customRed" />
  </div>
</div>

    <FoodCard
      image={ChickenBurger}
      name="Chicken Burger"
      price={390}
      rating={4.5}
      size= "chicken, bread , fries, sauce"
    />
    <FoodCard
      image={roastedChicken}
      name="Roasted Chicken"
      price={1250}
      rating={4.1}
      size= "Full "
    />
    <FoodCard
      image={Shawarma}
      name="Chicken Shawarma"
      price={285}
      rating={4.1}
      size={1100}
    />
    <FoodCard
      image={FriedChicken}
      name="Fried Chicken"
      price={550}
      rating={4.1}
      size={4 }
    />
    <FoodCard
      image={ChickenKabsa}
      name="Chicken Kabsa"
      price={470}
      rating={4.1}
      size={1100}
    />
    <FoodCard
      image={ChickenWing}
      name="Chicken Wings"
      price={440}
      rating={4.1}
      size={1100}
    />
    <FoodCard
      image={ChickenMofo}
      name="Chicken Mofo"
      price={1150}
      rating={4.1}
      size={1100}
    />
    <FoodCard
      image={ShawarmaPlate}
      name="Shawarma Plate"
      price={560}
      rating={4.1}
      size={1100}
    />
    <FoodCard
      image={GilledChicken}
      name="Gilled Chicken"
      price={1100}
      rating={4.1}
      size={1100}
    />
    <FoodCard
      image={GilledChicken}
      name="Gilled Chicken"
      price={1100}
      rating={4.1}
      size={1100}
    />
    <FoodCard
      image={GilledChicken}
      name="Gilled Chicken"
      price={1100}
      rating={4.1}
      size={1100}
    />
    <FoodCard
      image={GilledChicken}
      name="Gilled Chicken"
      price={1100}
      rating={4.1}
      size={1100}
    />
    <FoodCard
      image={GilledChicken}
      name="Gilled Chicken"
      price={1100}
      rating={4.1}
      size={1100}
    />
    <FoodCard
      image={GilledChicken}
      name="Gilled Chicken"
      price={1100}
      rating={4.1}
      size={1100}
    />
    <FoodCard
      image={GilledChicken}
      name="Gilled Chicken"
      price={1100}
      rating={4.1}
      size={1100}
    />
    <FoodCard
      image={GilledChicken}
      name="Gilled Chicken"
      price={1100}
      rating={4.1}
      size={1100}
    />
    <FoodCard
      image={GilledChicken}
      name="Gilled Chicken"
      price={1100}
      rating={4.1}
      size={1100}
    />
    <FoodCard
      image={GilledChicken}
      name="Gilled Chicken"
      price={1100}
      rating={4.1}
      size={1100}
    />
    <FoodCard
      image={GilledChicken}
      name="Gilled Chicken"
      price={1100}
      rating={4.1}
      size={1100}
    />
  </div>
  );
};

export default PopularMenu;
