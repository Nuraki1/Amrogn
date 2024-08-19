import React from 'react';
import FoodCard from './FoodCard';
import '../App.css';

import bgImage from '../images/yellowBg.png'
import ChickenBurger from '../images/menu/chickenBurger.png';
import roastedChicken from '../images/menu/roastedChicken.png';
import Shawarma from '../images/menu/chickenShawarma.png';
import FriedChicken from '../images/menu/friedChicken2.png';
import ChickenKabsa from '../images/menu/Akabsa.png';
import ChickenWing from '../images/menu/wing4.png';
import ChickenMofo from '../images/menu/chickenMofo.png';
import GrilledChicken from '../images/menu/grilledChicken.png';
import ShawarmaPlate from '../images/shawarmaPlate2.png';
import Fajitah from '../images/menu/fajitah.png';
import Aroasted from '../images/AroastedFull.png';

// import Shawarma from '../images/shawarma2.png';
import { GiFoodTruck } from 'react-icons/gi';
import { FaBook } from 'react-icons/fa'; // Import the FaBook icon
import { GiKnifeFork } from 'react-icons/gi';


const PopularMenu = ({ incrementCounter, decrementCounter }) => {
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

<div className="w-full poppins-bold mb-8 pt-32 relative">
  <h2 className="text-3xl text-black dark:text-gray-100 pr-3 ">
     New Amrogn Lists
  </h2>
  <div className="absolute top-0 right-0 transform translate-x-3 translate-y-3 animate-bounce">
    <GiKnifeFork className="w-10 h-10 pt-32 font-extrabold text-customRed" />
  </div>
</div>

    <FoodCard
      image={ChickenBurger}
      name="Chicken Burger"
      price={390}
      rating={4.5}
      size= "chicken, bread , fries, sauce"
      incrementCounter={() => incrementCounter({ image: ChickenBurger, name: "Chicken Burger", price: 390 })}
      decrementCounter={() => decrementCounter({ image: ChickenBurger, name: "Chicken Burger", price: 390 })}
    />
     <FoodCard
      image={Aroasted}
      name="Roasted Chicken"
      price={1100}
      rating={4.1}
      size= "Full"
      incrementCounter={() => incrementCounter({ image: Aroasted, name: "Roasted Chicken", price: 390 })}
      decrementCounter={() => decrementCounter({ image: Aroasted, name: "Roasted Chicken", price: 390 })}
    />
    {/* <FoodCard
      image={roastedChicken}
      name="Roasted Chicken"
      price={1250}
      rating={4.1}
      size= "Full "
    /> */}
    <FoodCard
      image={Shawarma}
      name="Chicken Shawarma"
      price={285}
      rating={4.1}
      size={1100}
      incrementCounter={() => incrementCounter({ image: Shawarma, name: "Chicken Shawarma", price: 285 })}
      decrementCounter={() => decrementCounter({ image: Shawarma, name: "Chicken Shawarma", price: 285 })}
    />
    <FoodCard
      image={FriedChicken}
      name="Fried Chicken"
      price={550}
      rating={4.1}
      size={4 }
      incrementCounter={() => incrementCounter({ image: FriedChicken, name: "Fried Chicken", price: 550 })}
      decrementCounter={() => decrementCounter({ image: FriedChicken, name: "Fried Chicken", price: 550 })}
    />
    <FoodCard
      image={ChickenKabsa}
      name="Chicken Kabsa"
      price={470}
      rating={4.1}
      size={1100}
      incrementCounter={() => incrementCounter({ image: ChickenKabsa, name: "Chicken Kabsa", price: 470 })}
      decrementCounter={() => decrementCounter({ image: ChickenKabsa, name: "Chicken Kabsa", price: 470 })}
    />
    <FoodCard
      image={ChickenWing}
      name="Chicken Wings"
      price={440}
      rating = {5}
      size="Full "
      incrementCounter={() => incrementCounter({ image: ChickenWing, name: "Chicken Wings", price: 440 })}
      decrementCounter={() => decrementCounter({ image: ChickenWing, name: "Chicken Wings", price: 440 })}
    />
    <FoodCard
      image={ChickenMofo}
      name="Chicken Mofo"
      price={1150}
      rating={4.1}
      size={1100}
      incrementCounter={() => incrementCounter({ image: ChickenMofo, name: "Chicken Mofo", price: 1150 })}
      decrementCounter={() => decrementCounter({ image: ChickenMofo, name: "Chicken Mofo", price: 1150 })}
    />
    <FoodCard
      image={ShawarmaPlate}
      name="Shawarma Plate"
      price={560}
      rating={4.1}
      size={1100} 
      incrementCounter={() => incrementCounter({ image: ShawarmaPlate, name: "Shawarma Plate", price: 560 })}
      decrementCounter={() => decrementCounter({ image: ShawarmaPlate, name: "Shawarma Plate", price: 560 })}
    />
    <FoodCard
      image={GrilledChicken}
      name="Gilled Chicken"
      price={1100}
      rating={4.1}
      size={1100}
      incrementCounter={() => incrementCounter({ image: GrilledChicken, name: "Gilled Chicken", price: 390 })}
      decrementCounter={() => decrementCounter({ image: GrilledChicken, name: "Gilled Chicken", price: 390 })}
    />
    <FoodCard
      image={Fajitah}
      name="Fajitah"
      price={580}
      rating={4.1}
      size={1100}
      incrementCounter={() => incrementCounter({ image: Fajitah, name: "Fajitah", price: 580 })}
      decrementCounter={() => decrementCounter({ image: Fajitah, name: "Fajitah", price: 580 })}
    />

{/* <hr class="border-t border-gray-300 w-1/2 mx-auto" /> */}

   
    
  </div>
  );
};

export default PopularMenu;
