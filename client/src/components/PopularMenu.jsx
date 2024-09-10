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
import GullashCombo from '../images/gullashes copy.png';
import roasted from '../images/roasteds.png';
import grilled from '../images/grilledComb.png';
import combo1 from '../images/comboList.png';
import mofoCombo from '../images/mofos2.png';
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
      size="Amrogn Special Chicken, rice, salad, pita, sauce"
      incrementCounter={() => incrementCounter({ image: combo1, name: "Amrogn Combo", price: 1250 })}
      decrementCounter={() => decrementCounter({ image: combo1, name: "Amrogn Combo", price: 1250 })}
    />
    <FoodCardCombo
      image={GullashCombo}
      name="Goulash Combo"
      price={1050}
      rating={4.5}
      size= "chicken goulash, legs, salad, pita , rice, sauce"
      incrementCounter={() => incrementCounter({ image: GullashCombo, name: "Goulash Combo", price: 1050 })}
      decrementCounter={() => decrementCounter({ image: GullashCombo, name: "Goulash Combo", price: 1050 })}
    />
     <FoodCardCombo
      image={mofoCombo}
      name="Moffo Combo"
      price={1100}
      rating={4.1}
      size= "moffo chicken, legs, pita, sauce, rice "
      incrementCounter={() => incrementCounter({ image: mofoCombo, name: "Moffo Combo", price: 1100 })}
      decrementCounter={() => decrementCounter({ image: mofoCombo, name: "Moffo Combo", price: 1100 })}
    />
    <FoodCardCombo
      image={grilled}
      name="Grilled Combo"
      price={550}
      rating={4.1}
      size="grilled chicken, legs, pita, rice, sauce"
      incrementCounter={() => incrementCounter({ image: grilled, name: "Grilled Combo", price: 1050 })}
      decrementCounter={() => decrementCounter({ image: grilled, name: "Grilled Combo", price: 1050 })}
    />
    <FoodCardCombo
      image={roastedChicken}
      name="Roasted Combo"
      price={1150}
      size="roasted chicken, legs, rice, pita, sauces"
      incrementCounter={() => incrementCounter({ image: roastedChicken, name: "Roasted Combo", price: 1150 })}
      decrementCounter={() => decrementCounter({ image: roastedChicken, name: "Roasted Combo", price: 1150 })}
    />

  </div>
  );
};

export default PopularMenu;
