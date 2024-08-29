import React from 'react';
import FoodCardCombo from './FoodCardCombo';
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
import GullashCombo from '../images/gullashes.png';
import roasted from '../images/roasteds.png';
import grilled from '../images/grilledComb.png';
import combo1 from '../images/comboList.png';
import combo2 from '../images/mofos.png';
import AmrognCombo from '../images/comboA.png'

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

<div className="w-full poppins-bold mb-8 pt-20 relative">
  <h2 className="text-3xl text-black dark:text-gray-100 pr-3 ">
     Amrogn Combo Menus
  </h2>
  <div className="absolute top-0 right-0 transform translate-x-3 translate-y-3 animate-bounce">
    <GiKnifeFork className="w-10 h-10 pt-32 font-extrabold text-customRed" />
  </div>
</div>

<FoodCardCombo
  image={combo1}
  name="Amrogn Combo"
  price={1250}
  rating={4.1}
  size="Amrogn Special Chicken, rice,salad, pita, sauce"
  incrementCounter={() => incrementCounter({ image: AmrognCombo, name: "Amrogn Combo", price: 1250 })}
  decrementCounter={() => decrementCounter({ image: AmrognCombo, name: "Amrogn Combo", price: 1250 })}
/>
    <FoodCardCombo
      image={GullashCombo}
      name="Goulash Combo"
      price={1050}
      rating={4.5}
      size= "chicken goulash, legs, salad, pita , rice, sauce"
      incrementCounter={() => incrementCounter({ image: combo1, name: "Goulash Combo", price: 1050 })}
      decrementCounter={() => decrementCounter({ image: combo1, name: "Goulash Combo", price: 1050 })}
    />
     <FoodCardCombo
      image={combo2}
      name="Moffo Combo"
      price={1100}
      rating={4.1}
      size= "moffo chicken, legs, pita, sauce, rice "
      incrementCounter={() => incrementCounter({ image: combo2, name: "Moffo Combo", price: 1100 })}
      decrementCounter={() => decrementCounter({ image: combo2, name: "Moffo Combo", price: 1100 })}
    />
    {/* <FoodCardCombo
      image={roastedChicken}
      name="Roasted Chicken"
      price={1250}
      rating={4.1}
      size= "Full "
    /> */}
    <FoodCardCombo
      image={grilled}
      name="Grilled Combo"
      price={550}
      rating={4.1}
      size="grilled chicken, legs, pita, rice, sauce"
      incrementCounter={() => incrementCounter({ image: FriedChicken, name: "Grilled Combo", price: 1050 })}
      decrementCounter={() => decrementCounter({ image: FriedChicken, name: "Grilled Combo", price: 1050 })}
    />
    <FoodCardCombo
      image={roasted}
      name="Roasted Combo"
      price={1150}
      size="roasted chicken, legs, rice, pita, sauces"
      incrementCounter={() => incrementCounter({ image: ChickenKabsa, name: "Roasted Combo", price: 1150 })}
      decrementCounter={() => decrementCounter({ image: ChickenKabsa, name: "Roasted Combo", price: 1150 })}
    />
    {/* <FoodCardCombo
      image={ChickenWing}
      name="Chicken Wings"
      price={440}
      rating = {5}
      size="Full "
      incrementCounter={() => incrementCounter({ image: ChickenWing, name: "Chicken Wings", price: 440 })}
      decrementCounter={() => decrementCounter({ image: ChickenWing, name: "Chicken Wings", price: 440 })}
    />
    <FoodCardCombo
      image={ChickenMofo}
      name="Chicken Mofo"
      price={1150}
      rating={4.1}
      size={1100}
      incrementCounter={() => incrementCounter({ image: ChickenMofo, name: "Chicken Mofo", price: 1150 })}
      decrementCounter={() => decrementCounter({ image: ChickenMofo, name: "Chicken Mofo", price: 1150 })}
    />
    <FoodCardCombo
      image={ShawarmaPlate}
      name="Shawarma Plate"
      price={560}
      rating={4.1}
      size={1100} 
      incrementCounter={() => incrementCounter({ image: ShawarmaPlate, name: "Shawarma Plate", price: 560 })}
      decrementCounter={() => decrementCounter({ image: ShawarmaPlate, name: "Shawarma Plate", price: 560 })}
    />
      <FoodCardCombo
        image={Fajitah}
        name="Fajitah"
        price={580}
        rating={4.1}
        size={1100}
        incrementCounter={() => incrementCounter({ image: Fajitah, name: "Fajitah", price: 580 })}
        decrementCounter={() => decrementCounter({ image: Fajitah, name: "Fajitah", price: 580 })}
      />
    <FoodCardCombo
      image={GrilledChicken}
      name="Gilled Chicken"
      price={1100}
      rating={4.1}
      size={1100}
      incrementCounter={() => incrementCounter({ image: GrilledChicken, name: "Gilled Chicken", price: 390 })}
      decrementCounter={() => decrementCounter({ image: GrilledChicken, name: "Gilled Chicken", price: 390 })}
    /> */}

{/* <hr class="border-t border-gray-300 w-1/2 mx-auto" /> */}

   
    
  </div>
  );
};

export default PopularMenu;
