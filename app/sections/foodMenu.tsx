import { Asterisk } from "lucide-react";
import React from "react";

// type Props = {}

const themeCol = "#d44618";
// const themeTextCol = "#ff5c29";
const FoodMenu = () => {
  return (
    <section
      id="menu"
      style={{ fontFamily: "var(--font-noto-sans)" }}
      className="w-full text-white  md:px-40 px-4 py-10 md:py-16 pb-20 flex flex-col  relative bg-black/80"
    >
      <h2 className="font-[Delius] text-4xl md:text-6xl text-center">
        FOOD MENU
      </h2>

      <div className="mt-4">
        <h3 className="text-xl md:text-2xl  font-medium">Starters</h3>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <div className="flex gap-2 md:text-xl  items-center">
              <Asterisk /> Gizdodo Sticks
            </div>
            <span className="md:text-2xl text-lg">🌶️</span>
          </li>
          <li className="flex justify-between">
            <div className="flex gap-2 md:text-xl  items-center">
              <Asterisk /> Assorted Meat Pepper Soup
            </div>
            <span className="md:text-2xl text-lg">🌶️🌶️</span>
          </li>
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="text-xl md:text-2xl  font-medium">Main Course</h3>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <div className="flex gap-2 md:text-xl  items-center">
              <Asterisk /> Battered Spicy Hake Fish
            </div>
            <span className="md:text-2xl text-lg">🌶️</span>
          </li>
          <li className="flex justify-between">
            <div className="flex gap-2 md:text-xl  items-center">
              <Asterisk /> Peppered Turkey
            </div>
            <span className="md:text-2xl text-lg">🌶️🌶️</span>
          </li>
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="text-xl md:text-2xl  font-medium">Side Dish</h3>
        <span className="text-sm font-[Delius]">All served with coleslaw</span>
        <ul className="space-y-2">
          
          <li >
            <div className="flex justify-between">
            <div className="flex gap-2 md:text-xl  items-center">
              <Asterisk /> Gidi Party Collab
            </div>
            <span className="md:text-2xl text-lg">🌶️</span>

            </div>
            <span className="text-sm font-[Delius]" >(smoky jollof rice, vegetable fried rice)</span>
          </li>
          <li >
            <div className="flex justify-between">
            <div className="flex gap-2 md:text-xl  items-center">
              <Asterisk /> Chinese Stir Fry
            </div>
            <span className="md:text-2xl text-lg">🌶️🌶️</span>

            </div>
            <span className="text-sm font-[Delius]" >(mixed meat)</span>
          </li>
          <li >
            <div className="flex justify-between">
            <div className="flex gap-2 md:text-xl  items-center">
              <Asterisk /> Beef Suya Wrap
            </div>
            <span className="md:text-2xl text-lg">🌶️🌶️🌶️</span>

            </div>
            <span className="text-sm font-[Delius]" >(with chicken sausage)</span>
          </li>
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="text-xl md:text-2xl  font-medium">Desserts</h3>
        <ul className="space-y-2">
        <li className="flex justify-between">
            <div className="flex gap-2 md:text-xl  items-center">
              <Asterisk /> Blackie’s Triple Choc Fudge Cake
            </div>
            <span className="md:text-2xl text-lg">🍬</span>
          </li>
          <li >
            <div className="flex justify-between">
            <div className="flex gap-2 md:text-xl  items-center">
              <Asterisk /> A Rookie-Rookie Smoothie
            </div>
            <span className="md:text-2xl text-lg">🍬🍬🍬</span>

            </div>
            <span className="text-sm font-[Delius]" >(ginger, banana, dates, yoghurt)</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FoodMenu;

export const FoodMenuHeader = ({
  title,
  number,
  backgroundColor,
}: {
  title: string;
  number: string;
  backgroundColor: string;
}) => {
  return (
    <div
      className="flex mb-4 items-center px-3 py-2 rounded-lg justify-between gap-4"
      style={{ backgroundColor: backgroundColor }}
    >
      <span className="text-lg text-nowrap font-semibold"> {title}</span>
      <div className="w-full h-0.5  " style={{ backgroundColor: themeCol }} />
      <span className="text-lg bg-white text-nowrap text-black rounded-lg px-2 py-1 font-semibold">
        {number}
      </span>
    </div>
  );
};
