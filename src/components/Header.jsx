import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";
import Greeter from "./Greeter";
import DoubleDice from "./doubledice";
import ColorList from "./ColorList";
import SlotMachine from "./SlotMachine";
import ShoppingList from "./ShoppingList";
import PropertyList from "./PropertyList";
import Clicker from "./Clicker";
import Counter from "./Counter";
import Toggler from "./Toggler";
import ColorGrid from "./ColorGrid";
import ScoreKeeper from "./ScoreKeeper";
import AddEmoji from "./AddEmoji";

const properties = [
    { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
    { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
    { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
    { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
    { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
    { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
  ];

  const colors = [
    "#E53935",
    "#E91E63",
    "#9C27B0",
    "#673AB7",
    "#3F51B5",
    "#2196F3",
    "#03A9F4",
    "#00BCD4",
    "#009688",
    "#4CAF50",
    "#8BC34A",
    "#CDDC39",
    "#FFEB3B",
    "#FFC107",
    "#FF9800",
    "#FF5722",
  ];

export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={AiFillHome} />
        <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoCircleFill} />
        <div className=""></div>
      </div>
      <div className="text-2xl flex items-center space-x-5">
        <DarkModeSwitch />
        <Link href="/">
          <h2>
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">
              IMDb
            </span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
      {/* <Greeter color = "magenta "list={[1,2,3]}/>
      <DoubleDice color = "text-yellow-500"/>
      <ColorList colors={["red", "magenta", "purple"]}/> */}
      {/* <SlotMachine val1="a" val2="b" val3="a"/>
      <SlotMachine val1="a" val2="a" val3="a"/>
      <ShoppingList items={data}/> */}
      {/* <PropertyList properties={properties}/>
      <Clicker message="Hiiii" buttonText="Please click me"/>
      <Clicker message="Stop Clicking me" buttonText="Don't click me"/> */}
      {/* <Counter/>
      <Toggler />
      <ColorGrid colors={colors}/> */}
      <ScoreKeeper numPlayers = {4}/>
      {/* <AddEmoji /> */}


    </div>
  );
}
 