import React from "react";
import { FoodMenuHeader } from "./foodMenu";

// type Props = {}

const themeCol = "#450266"
// #450266
const themeTextCol = "#de9cfd"
const DrinkMenu = () => {
  return (
    <section
      style={{ fontFamily: "var(--font-noto-sans)" }}
      className="w-full text-white  md:px-20 px-4 py-10 md:py-16 pb-20 flex flex-col  relative bg-black/80"
    >
      <FoodMenuHeader
        backgroundColor={themeTextCol}
        title="Food Menu"
        number="01/03"
      />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* 1st item */}
        <div className="md:grid flex flex-col-reverse gap-2 grid-rows-[3fr_2fr] ">
          <div
            className="w-full min-h-[300px] md:min-h-auto"
            style={{
              backgroundImage: "url(/images/peppersoup.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="flex flex-col">
            <div className="flex items-center gap-3 w-full justify-between">
              <span className="text-lg font-semibold">Gizdodo Sticks </span>
              <div className="h-0.5 flex-1 " style={{backgroundColor:themeCol}} />
              <span>🌶️🌶️</span>
            </div>
            <div className="flex items-center gap-3 w-full justify-between">
              <span className="text-lg font-semibold">
                {" "}
                Assorted Meat Pepper Soup{" "}
              </span>
              <div className="h-0.5 flex-1 " style={{backgroundColor:themeCol}} />
              <span>🌶️🌶️🌶️</span>
            </div>
            <span className=" font-medium">
              A flavorful starter of spiced Gizdodo Sticks and hearty Assorted
              Meat Pepper Soup with a fiery kick.
            </span>
            <div className="md:mt-10 my-2 md:my-0">
              <div className="flex items-center gap-2">
                <div className="w-7 h-0.5 " style={{backgroundColor:themeCol}} />
                <span className="text-lg font-semibold" style={{color:themeTextCol}}>
                  Starter
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* 2nd item */}
        <div className="md:grid flex-col gap-2 col-span-2 grid-rows-[2fr_3fr] ">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 w-full justify-between">
              <span className="text-lg font-semibold">
                Battered Spicy Hake Fish
              </span>
              <div className="h-0.5 flex-1 " style={{backgroundColor:themeCol}} />
              <span>🌶️</span>
            </div>
            <div className="flex items-center gap-3 w-full justify-between">
              <span className="text-lg font-semibold">
              Peppered Turkey
              </span>
              <div className="h-0.5 flex-1 " style={{backgroundColor:themeCol}} />
              <span>🌶️🌶️</span>
            </div>
            <span className=" font-medium">
              A delicious duo of Battered Spicy Hake Fish with a mild kick and
              Peppered Turkey bursting with bold, fiery flavor.
            </span>
            <div className="md:mt-auto my-2 md:my-0">
              <div className="flex items-center gap-2">
                <div className="w-7 h-0.5 " style={{backgroundColor:themeCol}} />
                <span className="text-lg font-semibold" style={{color:themeTextCol}}>
                  Main
                </span>
              </div>
            </div>
          </div>
          <div
            className="w-full min-h-[300px] md:min-h-auto"
            style={{
              backgroundImage: "url(/images/jollofRice.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        {/* 3rd item */}
        <div className="md:grid flex flex-col-reverse gap-2 grid-rows-[3fr_2fr] ">
          <div
            className="w-full min-h-[300px] md:min-h-auto"
            style={{
              backgroundImage: "url(/images/chocolateCake.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "50% 0%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="flex flex-col">
            <div className="flex items-center gap-3 w-full justify-between">
              <span className="text-lg font-semibold">A Rookie-Rookie Smoothie</span>
              <div className="h-0.5 flex-1 " style={{backgroundColor:themeCol}} />
              <span>🍬</span>
            </div>
            <div className="flex items-center gap-3 w-full justify-between">
              <span className="text-lg font-semibold">
                Blackie’s Triple Choc Fudge Cake
              </span>
              <div className="h-0.5 flex-1 " style={{backgroundColor:themeCol}} />
              <span>🍬🍬</span>
            </div>
            <span className=" font-medium">
            Indulge in Blackie’s Triple Choc Fudge Cake or savor the refreshing Rookie-Rookie Smoothie, a blend of ginger, banana, dates, and yoghurt.
            </span>
            <div className="md:mt-10 my-2 md:my-0 ">
              <div className="flex items-center gap-2">
                <div className="w-7 h-0.5 " style={{backgroundColor:themeCol}} />
                <span className="text-lg font-semibold" style={{color:themeTextCol}}>
                  Dessert
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrinkMenu;

