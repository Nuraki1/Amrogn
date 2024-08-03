import React from 'react';
import FoodCard from './FoodCard';
import '../App.css';

import bgImage from '../images/yellowPaint.jpg'
import ChickenBurger from '../images/menu/chickenBurger.png';
import roastedChicken from '../images/menu/roastedChicken.png';
import Shawarma from '../images/menu/chickenShawarma.png';
import FriedChicken from '../images/menu/friedChicken2.png';
import ChickenKabsa from '../images/menu/Akabsa.png';
import ChickenWing from '../images/menu/wing5.png';
import ChickenWing2 from '../images/menu/wingHalf.png';
import ChickenMofo from '../images/menu/mofo2Quarter.png';
import ChickenMofo2 from '../images/menu/mofoQuarter.png';
import GrilledChicken from '../images/menu/grilledChicken.png';
import ShawarmaPlate from '../images/shawarmaPlate2.png';
import Fajitah from '../images/menu/fajitah.png';
import AroastedFull from '../images/AroastedFull.png';
import Aroasted from '../images/Aroasted.png';
import specialShawarma from '../images/menu/specialShawarma.png'

// import Shawarma from '../images/shawarma2.png';
import { GiFoodTruck } from 'react-icons/gi';
import { FaBook } from 'react-icons/fa'; // Import the FaBook icon
import { GiKnifeFork } from 'react-icons/gi';


const MenuList = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-10 "
    // style={{
    //     // backgroundImage: `url(${bgImage})`,
       
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //     zIndex: 0,
    //   }}
      >

    {/* <div className="w-full mb-8">
      <h2 className="text-3xl font-bold dark:text-black">Our Popular Menu</h2>
    </div> */}
    {/* Head of the menu */}

<div id='chicken' className="w-full poppins-bold mb-8 pt-32 relative">
  <h2 className="text-3xl text-black dark:text-gray-900 pr-3 ">
     Chicken 
  </h2>
  <div className="absolute top-0 right-0 transform translate-x-3 translate-y-3 animate-bounce">
    <GiKnifeFork className="w-10 h-60 font-extrabold text-customRed" />
  </div>
</div>

<FoodCard
 image={AroastedFull}
 name="Roasted Chicken"
 price="1,280"
 badgeText="Full"
 size= "Double Quarter Leg"
/>
<FoodCard
 image={Aroasted}
 name="Roasted Chicken"
 price={640}
 badgeText="Half"
 size= "Quarter Leg"
/>
<FoodCard
  image={ChickenMofo}
  name="Chicken Mofo"
  price="1,450"
  badgeText="Full"
  size="Double Quarter Leg "
/>
<FoodCard
  image={ChickenMofo2}
  name="Chicken Mofo"
  price={730}
  badgeText="Half"
  size="Quarter Leg "
/>
<FoodCard
      image={GrilledChicken}
      name="Gilled Chicken"
      price="1,280"
      badgeText="Full"
      size="Double Quarter Leg"
    />
<FoodCard
      image={GrilledChicken}
      name="Gilled Chicken"
      price={640}
      badgeText="Half"
      size="Quarter Leg"
    />

<FoodCard
      image={ChickenWing}
      name="Chicken Wings"
      price={540}
      badgeText = "Full"
      size="Full (10 pcs) "
    />
<FoodCard
      image={ChickenWing2}
      name="Chicken Wings"
      price={430}
      badgeText = "Half"
      size="half (5 pcs) "
    />
<FoodCard
      image={ChickenKabsa}
      name="Chicken Kabsa"
      price={540}
      badgeText="Full"
      size="served with rice"
    />


<div  id="shawarma" className="w-full poppins-bold mb-8 pt-32 relative">
  <h2 className="text-3xl text-black dark:text-gray-900 pr-3 ">
     Shawarma
  </h2>
  <div className="absolute top-0 right-0 transform translate-x-3 translate-y-3 animate-bounce">
    <GiKnifeFork className="w-10 h-60 font-extrabold text-customRed" />
  </div>
</div>

    <FoodCard
      image={Shawarma}
      name="Chicken Shawarma"
      price={285}
      badgeText="Normal"
      size={1100}
    />
      <FoodCard
        image={ShawarmaPlate}
        name="Shawarma Plate"
        price={560}
        badgeText="Plate"
        size={1100}
      />
      <FoodCard
        image={specialShawarma}
        name="Special Sahwarma"
        price={560}
        badgeText="Special"
        size={1100}
      />

<div id='burger' className="w-full poppins-bold mb-8 pt-32 relative">
  <h2 className="text-3xl text-black dark:text-gray-900 pr-3 ">
     Burger and Fast Food
  </h2>
  <div className="absolute top-0 right-0 transform translate-x-3 translate-y-3 animate-bounce">
  <GiKnifeFork className="w-10 h-60 font-extrabold text-customRed" />
  </div>
</div>
      
    <FoodCard
      image={ChickenBurger}
      name="Chicken Burger"
      price={390}
      badgeText={4.5}
      size= "chicken, bread , fries, sauce"
    />

    <FoodCard
      image={FriedChicken}
      name="Fried Chicken"
      price={550}
      badgeText={4.1}
      size={4 }
    />
    <FoodCard
      image={Fajitah}
      name="Fajitah"
      price={580}
      badgeText={4.1}
      size={1100}
    />
   
    
  </div>
  );
};

export default MenuList;
