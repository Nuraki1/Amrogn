import React, {useState} from "react";
import FoodCard from "./FoodCard";
import "../App.css";

import bgImage from "../images/yellowPaint.jpg";
import ChickenBurger from "../images/menu/chickenBurger.png";
import Soft from "../images/softDrinks.png";
import Novida from "../images/novidda.png";
import Water from "../images/waterBottle.png";
import Juice from "../images/juiceA.png";
import Energy from "../images/energyDrink.png";
import Shawarma from "../images/menu/chickenShawarma.png";
import FriedChicken from "../images/menu/friedChicken2.png";
import ChickenKabsa from "../images/menu/Akabsa.png";
import ChickenWing from "../images/menu/wing5.png";
import ChickenWing2 from "../images/menu/wingHalf.png";
import ChickenMofo from "../images/menu/mofo2Quarter.png";
import ChickenMofo2 from "../images/menu/mofoQuarter.png";
import GrilledChicken from "../images/menu/grilledChicken.png";
import ShawarmaPlate from "../images/shawarmaPlate2.png";
import Fajitah from "../images/menu/fajitah.png";
import AroastedFull from "../images/AroastedFull.png";
import Aroasted from "../images/Aroasted.png";
import specialShawarma from "../images/menu/specialShawarma.png";
import Box from "../images/box.png";
import Foil from "../images/foilNew.png";
import Pita from "../images/menu/pita1.png";
import Fries from "../images/menu/frenchFries.png";
import Rice from "../images/rices.png";
import ChickenSalad from "../images/chickenSalad.png";
import greenSalad from "../images/greenSalad.png";
import Sauces from "../images/sauces.png";
import Spice from "../images/spice.png";
import Mayo from "../images/mayo.png";
import combo from "../images/comboA.png"
// import combo from "./images/comboList.jpg"
// import Shawarma from '../images/shawarma2.png';
import { GiFoodTruck } from "react-icons/gi";
import { FaBook } from "react-icons/fa"; // Import the FaBook icon
import { GiKnifeFork } from "react-icons/gi";
// import '../components/Front.jsx';


const MenuList = ({ incrementCounter, decrementCounter }) => {
  const [isEnglish, setIsEnglish] = useState(true);

  const handleLanguageChange = (language) => {
    setIsEnglish(language);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 p-10">
     

      <div id="chicken" className="w-full poppins-bold mb-8 pt-32 relative">
        <h2 className="text-3xl text-gray-700 dark:text-gray-200 pr-3 ">
          Chicken
        </h2>
        <div className="absolute top-0 right-0 transform translate-x-3 translate-y-3 animate">
          <GiKnifeFork className="w-10 h-60 font-extrabold text-customRed" />
        </div>
      </div>

      <FoodCard
        image={AroastedFull}
        name="Roasted Chicken"
        price="1,280"
        badgeText="Full"
        size="Double Quarter Leg, rice, Amrogn Sauce, Salad, Pita"
        rating={5}
      incrementCounter={() => incrementCounter({ image: AroastedFull, name: "Roasted Chicken", price: 1280 })}
      decrementCounter={() => decrementCounter({ image: AroastedFull, name: "Roasted Chicken", price: 1280})}
      />
      <FoodCard
        image={Aroasted}
        name="Roasted Chicken"
        price={640}
        badgeText="Half"
        size="Quarter Leg, rice, Amrogn Sauce, Salad, Pita"
        rating={4}
      incrementCounter={() => incrementCounter({ image: Aroasted, name: "1/2 Roasted Chicken", price: 640 })}
      decrementCounter={() => decrementCounter({ image: Aroasted, name: "1/2 Roasted Chicken", price: 640 })}
      />
      <FoodCard
        image={ChickenMofo}
        name="Chicken Mofo"
        price="1,450"
        badgeText="Full"
        size="Double Quarter Leg, rice, Amrogn Sauce "
        rating={5}
      incrementCounter={() => incrementCounter({ image: ChickenMofo, name: "Chicken Mofo", price: 1450 })}
      decrementCounter={() => decrementCounter({ image: ChickenMofo, name: "Chicken Mofo", price: 1450 })}
      />
      <FoodCard
        image={ChickenMofo2}
        name="Chicken Mofo"
        price={730}
        badgeText="Half"
        size="Quarter Leg, rice, Amrogn Sauce "
        rating={5}
      incrementCounter={() => incrementCounter({ image: ChickenMofo2, name: "1/2 Chicken Mofo ", price: 730 })}
      decrementCounter={() => decrementCounter({ image: ChickenMofo2, name: "1/2 Chicken Mofo", price: 730 })}
      />
      <FoodCard
        image={GrilledChicken}
        name="Grilled Chicken"
        price="1,280"
        badgeText="Full"
        size="Double Quarter Leg, rice, Amrogn Sauce"
        rating={5}
      incrementCounter={() => incrementCounter({ image: GrilledChicken, name: "Grilled Chicken", price: 1280 })}
      decrementCounter={() => decrementCounter({ image: GrilledChicken, name: "Grilled Chicken", price: 1280 })}
      />
      <FoodCard
        image={GrilledChicken}
        name="Grilled Chicken"
        price={640}
        badgeText="Half"
        size="Quarter Leg, rice, Amrogn Sauce"
        rating={4}
      incrementCounter={() => incrementCounter({ image: GrilledChicken, name: "1/2 Grilled Chicken", price: 640 })}
      decrementCounter={() => decrementCounter({ image: GrilledChicken, name: "1/2 Grilled Chicken", price: 640 })}
      />

      <FoodCard
        image={ChickenWing}
        name="Chicken Wings"
        price={540}
        badgeText="Full"
        size="Full (10 pcs) of wings, rice, Amrogn Sauce "
        rating={4}
      incrementCounter={() => incrementCounter({ image: ChickenWing, name: "Chicken Wings", price: 540 })}
      decrementCounter={() => decrementCounter({ image: ChickenWing, name: "Chicken Wings", price: 540 })}
      />
      <FoodCard
        image={ChickenWing2}
        name="Chicken Wings"
        price={430}
        badgeText="Half"
        size="half (5 pcs) of wings, rice, Amrogn Sauce "
        rating={5}
      incrementCounter={() => incrementCounter({ image: ChickenWing2, name: "Chicken Wings", price: 430 })}
      decrementCounter={() => decrementCounter({ image: ChickenWing2, name: "Chicken Wings", price: 430 })}
      />
      <FoodCard
        image={ChickenKabsa}
        name="Chicken Kabsa"
        price={540}
        badgeText="Full"
        size="chicken, served with rice, Salad"
        rating={5}
      incrementCounter={() => incrementCounter({ image: ChickenKabsa, name: "Chicken Kabsa", price: 540 })}
      decrementCounter={() => decrementCounter({ image: ChickenKabsa, name: "Chicken Kabsa", price: 540 })}
      />
      <hr class="border-t-2 border-gray-900" />

      <div id="shawarma" className="w-full poppins-bold mb-8 pt-32 relative">
        <h2 className="text-3xl text-gray-700 dark:text-gray-200 pr-3 ">
          Shawarma
        </h2>
        <div className="absolute top-0 right-0 transform translate-x-3 translate-y-3 animate">
          <GiKnifeFork className="w-10 h-60 font-extrabold text-customRed" />
        </div>
      </div>

      <FoodCard
        image={Shawarma}
        name="Chicken Shawarma"
        price={285}
        badgeText="Normal"
        size="Served with French Fries"
        rating={5}
      incrementCounter={() => incrementCounter({ image: Shawarma, name: "Chicken Shawarma", price: 284 })}
      decrementCounter={() => decrementCounter({ image: Shawarma, name: "Chicken Shawarma", price: 284 })}
      />
      <FoodCard
        image={ShawarmaPlate}
        name="Shawarma Plate"
        price={560}
        badgeText="Plate"
        size="Served with French Fries, Amrogn sauce"
        rating={4}
      incrementCounter={() => incrementCounter({ image: ShawarmaPlate, name: "Shawarma Plate", price: 560 })}
      decrementCounter={() => decrementCounter({ image: ShawarmaPlate, name: "Shawarma Plate", price: 560 })}
      />
      <FoodCard
        image={specialShawarma}
        name="Special Sahwarma"
        price={380}
        badgeText="Special"
        size="Served with French Fries, Amrogn sauce"
        rating={5}
      incrementCounter={() => incrementCounter({ image: specialShawarma, name: "Special Sahwarma", price: 380 })}
      decrementCounter={() => decrementCounter({ image: specialShawarma, name: "Special Sahwarma", price: 380 })}
      />

      <div id="burger" className="w-full poppins-bold mb-8 pt-32 relative">
        <h2 className="text-3xl text-gray-700 dark:text-gray-200 pr-3 ">
          Burger and Fast Food
        </h2>
        <div className="absolute top-0 right-0 transform translate-x-3 translate-y-3 animate">
          <GiKnifeFork className="w-10 h-60 font-extrabold text-customRed" />
        </div>
      </div>

      <FoodCard
        image={ChickenBurger}
        name="Chicken Burger"
        price={390}
        badgeText="Burger"
        size="chicken, bread , fries, sauce"
        rating={5}
        incrementCounter={() => incrementCounter({ image: ChickenBurger, name: "Chicken Burger", price: 390 })}
      decrementCounter={() => decrementCounter({ image: ChickenBurger, name: "Chicken Burger", price: 390 })}
      />

      <FoodCard
        image={FriedChicken}
        name="Fried Chicken"
        price={420}
        badgeText="2pcs"
        size="2pcs of fried chicken, French Fries, sauce"
        rating={5}
      incrementCounter={() => incrementCounter({ image: FriedChicken, name: "2pcs Fried Chicken", price: 420 })}
      decrementCounter={() => decrementCounter({ image: FriedChicken, name: "2pcs Fried Chicken", price: 420 })}
      />
      <FoodCard
        image={FriedChicken}
        name="Fried Chicken"
        price={490}
        badgeText="3pcs"
        size="3pcs of fried chicken, French Fries, sauce"
        rating={5}
      incrementCounter={() => incrementCounter({ image: FriedChicken, name: "3pcs Fried Chicken", price: 490 })}
      decrementCounter={() => decrementCounter({ image: FriedChicken, name: "3pcs Fried Chicken", price: 490 })}
      />
      <FoodCard
        image={FriedChicken}
        name="Fried Chicken"
        price={550}
        badgeText="4pcs"
        size="4pcs of fried chicken, French Fries, sauce"
        rating={5}
      incrementCounter={() => incrementCounter({ image: FriedChicken, name: "4pcs Fried Chicken", price: 550 })}
      decrementCounter={() => decrementCounter({ image: FriedChicken, name: "4pcs Fried Chicken", price: 550 })}
      />
      <FoodCard
        image={Fajitah}
        name="Fajitah"
        price={580}
        badgeText=""
        size="boneless chicken breast, special souce, pita"
        rating={4}
      incrementCounter={() => incrementCounter({ image: Fajitah, name: "Fajitah", price: 580 })}
      decrementCounter={() => decrementCounter({ image: Fajitah, name: "Fajitah", price: 580 })}
      />

      <div id="salad" className="w-full poppins-bold mb-8 pt-32 relative">
        <h2 className="text-3xl text-gray-700 dark:text-gray-200 pr-3 ">
          Salad
        </h2>
        <div className="absolute top-0 right-0 transform translate-x-3 translate-y-3 animate">
          <GiKnifeFork className="w-10 h-60 font-extrabold text-customRed" />
        </div>
      </div>
      <FoodCard
        image={greenSalad}
        name="Green Salad"
        price={220}
        badgeText="vegan"
        size="salad, vegitables, spices"
        rating={4}
      incrementCounter={() => incrementCounter({ image: greenSalad, name: "Green Salad", price: 220 })}
      decrementCounter={() => decrementCounter({ image: greenSalad, name: "Green Salad", price: 220 })}
      />
      <FoodCard
        image={ChickenSalad}
        name="Chicken Salad"
        price={350}
        badgeText="chicken"
        size="salad, vegitables,spices, chicken"
        rating={5}
      incrementCounter={() => incrementCounter({ image: ChickenSalad, name: "Chicken Salad", price: 350 })}
      decrementCounter={() => decrementCounter({ image: ChickenSalad, name: "Chicken Salad", price: 350 })}
      />

      <div id="extras" className="w-full poppins-bold mb-8 pt-32 relative">
        <h2 className="text-3xl text-gray-700 dark:text-gray-200 pr-3 ">
          Extras
        </h2>
        <div className="absolute top-0 right-0 transform translate-x-3 translate-y-3 animate">
          <GiKnifeFork className="w-10 h-60 font-extrabold text-customRed" />
        </div>
      </div>
      <FoodCard
        image={Fries}
        name="French Fries"
        price={150}
        badgeText="chips"
        size="fries, ketchup, sauce"
        rating={5}
      incrementCounter={() => incrementCounter({ image: Fries, name: "", price: 150 })}
      decrementCounter={() => decrementCounter({ image: Fries, name: "", price: 150 })}
      />
      <FoodCard
        image={Rice}
        name="Rice"
        price={180}
        badgeText="plate"
        size="rice, Amrogn spice"
        rating={5}
      incrementCounter={() => incrementCounter({ image: Rice, name: "Rice", price: 180 })}
      decrementCounter={() => decrementCounter({ image: Rice, name: "Rice", price: 180 })}
      />
      <FoodCard
        image={Pita}
        name="Pita"
        price={30}
        badgeText="1 pcs"
        size="medium sized"
        rating={5}
      incrementCounter={() => incrementCounter({ image: Pita, name: "Pita", price: 30 })}
      decrementCounter={() => decrementCounter({ image: Pita, name: "Pita", price: 30 })}
      />
      <FoodCard
        image={Mayo}
        name="mayonnaise"
        price={50}
        badgeText="1 cup"
        size=""
      incrementCounter={() => incrementCounter({ image: Mayo, name: "mayonnaise", price: 50 })}
      decrementCounter={() => decrementCounter({ image: Mayo, name: "mayonnaise", price: 50 })}
      />
      <FoodCard
        image={Spice}
        name="Spices"
        price={50}
        badgeText="1 cup"
        size=""
        rating={5}
      incrementCounter={() => incrementCounter({ image: Spice, name: "Spices", price: 50 })}
      decrementCounter={() => decrementCounter({ image: Spice, name: "Spices", price: 50 })}
      />
      <FoodCard
        image={Sauces}
        name="Sauce by Cup"
        price={150}
        badgeText="1 cup"
        size=""
        rating={5}
      incrementCounter={() => incrementCounter({ image: Sauces, name: "Sauce by Cup", price: 150 })}
      decrementCounter={() => decrementCounter({ image: Sauces, name: "Sauce by Cup", price: 150 })}
      />

      <div id="juice" className="w-full poppins-bold mb-8 pt-32 relative">
        <h2 className="text-3xl text-gray-700 dark:text-gray-200 pr-3 ">
          Juices and Drinks
        </h2>
        <div className="absolute top-0 right-0 transform translate-x-3 translate-y-3 animate">
          <GiKnifeFork className="w-10 h-60 font-extrabold text-customRed" />
        </div>
      </div>
      <FoodCard
        image={Juice}
        name="Juice"
        price={200}
        badgeText="Special Juice"
        size="strawberry, milk, cocktail"
        rating={5}
      incrementCounter={() => incrementCounter({ image: Juice, name: "Juice", price: 200 })}
      decrementCounter={() => decrementCounter({ image: Juice, name: "Juice", price: 200 })}
      />

      <FoodCard
        image={Novida}
        name="Novida"
        price={50}
        badgeText="schwepps"
        size="Apple Soft Drink"
      incrementCounter={() => incrementCounter({ image: Novida, name: "Novida", price: 50 })}
      decrementCounter={() => decrementCounter({ image: Novida, name: "Novida", price: 50 })}
      />
      <FoodCard
        image={Soft}
        name="Soft Drink"
        price={40}
        badgeText="Gas Drinks"
        size="Sprite, Coca-cola, Fanta"
      incrementCounter={() => incrementCounter({ image: Soft, name: "Soft Drink", price: 40 })}
      decrementCounter={() => decrementCounter({ image: Soft, name: "Soft Drink", price: 40 })}
      />
      <FoodCard
        image={Water}
        name="Water"
        price={50}
        badgeText="0.5 L"
        size="Purified water"
      incrementCounter={() => incrementCounter({ image: Water, name: "Water", price: 50 })}
      decrementCounter={() => decrementCounter({ image: Water, name: "Water", price: 50 })}
      />
      <FoodCard
        image={Energy}
        name="Energy Drink"
        price={35}
        badgeText="0.5 L"
        size="Predator, Malta"
      incrementCounter={() => incrementCounter({ image: Energy, name: "Energy Drink", price: 35 })}
      decrementCounter={() => decrementCounter({ image: Energy, name: "Energy Drink", price: 35 })}
      />

      <div id="takeaway" className="w-full poppins-bold mb-8 pt-32 relative">
        <h2 className="text-3xl text-gray-700 dark:text-gray-200 pr-3 ">
          Take Away
        </h2>
        <div className="absolute top-0 right-0 transform translate-x-3 translate-y-3 animate">
          <GiKnifeFork className="w-10 h-60 font-extrabold text-customRed" />
        </div>
      </div>

      <FoodCard
        image={Box}
        name="Big Box"
        price={40}
        badgeText="Big Box"
        size="For more than 2 Menus"
      incrementCounter={() => incrementCounter({ image: Box, name: "Big Box", price: 40 })}
      decrementCounter={() => decrementCounter({ image: Box, name: "Big Box", price: 40 })}
      />
      <FoodCard
        image={Box}
        name="Small Box"
        price={30}
        badgeText="Small Box"
        size="For maximum of 2 Menus"
      incrementCounter={() => incrementCounter({ image: Box, name: "Small Box", price: 30 })}
      decrementCounter={() => decrementCounter({ image: Box, name: "Small Box", price: 30 })}
      />
      <FoodCard
        image={Foil}
        name="Foil"
        price={20}
        badgeText="Foil"
        size=""
      incrementCounter={() => incrementCounter({ image: Foil, name: "Foil", price: 20 })}
      decrementCounter={() => decrementCounter({ image: Foil, name: "Foil", price: 20 })}
      />
    </div>
  );
};

export default MenuList;
