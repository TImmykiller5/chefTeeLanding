import { Asterisk } from "lucide-react";
import React from "react";

// type Props = {}

// const themeCol = "#450266"
// #450266
// const themeTextCol = "#de9cfd"
const DrinkMenu = () => {
  return (
    <section
      style={{ fontFamily: "var(--font-noto-sans)" }}
      className="w-full text-white  md:px-40 px-4 py-10 md:py-16 pb-20 flex flex-col  relative bg-black/80"
    >
    <h2 className="font-[Delius] text-4xl md:text-6xl text-center">
        DRINK MENU
      </h2>
      {/* <span className="font-semibold font-[Delius]"></span> */}
      <div className="mt-4">
        <h3 className="text-xl md:text-2xl font-medium">Cocktails</h3>
        <span className="text-sm font-[Delius]">First cocktail  on us! Additional cocktails at 3,500 each</span>
        <ul className="space-y-2">
          
          <li >
            <div className="flex justify-between">
            <div className="flex  gap-2  md:text-xl items-center">
              <Asterisk /> Margarita
            </div>
            <span className="text-lg md:text-2xl">🍷</span>

            </div>
            <span className="text-sm font-[Delius]" >(shaken & salt rimmed - lime juice, triple sec, tequila)</span>
          </li>
          <li >
            <div className="flex justify-between">
            <div className="flex  gap-2  md:text-xl items-center">
              <Asterisk /> Cupid’s Cosmopolitan
            </div>
            <span className="text-lg md:text-2xl">🍷🍷</span>

            </div>
            <span className="text-sm font-[Delius]" >(lime juice, cranberry juice, hibiscus syrup, cointreau, vodka)</span>
          </li>
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="text-xl md:text-2xl font-medium">Shots</h3>
        <span className="text-sm font-[Delius]">First classic shot on us! Additional classic shot at 1,500 each, bomb at 2,500 each</span>
        <ul className="space-y-2">
          
          <li >
            <div className="flex justify-between">
            <div className="flex  gap-2  md:text-xl items-center">
              <Asterisk /> Tequila
            </div>
            <span className="text-lg md:text-2xl">🍷</span>

            </div>
          </li>
          <li >
            <div className="flex justify-between">
            <div className="flex  gap-2  md:text-xl items-center">
              <Asterisk /> Vodka
            </div>
            <span className="text-lg md:text-2xl">🍷🍷</span>

            </div>
          </li>
          <li >
            <div className="flex justify-between">
            <div className="flex  gap-2  md:text-xl items-center">
              <Asterisk /> Jagerbomb
            </div>
            <span className="text-lg md:text-2xl">🍷🍷</span>

            </div>
            <span className="text-sm font-[Delius]" >(Jägermeister, red bull)</span>
          </li>
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="text-xl md:text-2xl font-medium">Mocktails</h3>
        <span className="text-sm font-[Delius]">First mocktail on us! Additional mocktails at 3,000 each</span>
        <ul className="space-y-2">
          
          <li >
            <div className="flex justify-between">
            <div className="flex  gap-2  md:text-xl items-center">
              <Asterisk /> Margarita
            </div>
            <span className="text-lg md:text-2xl"></span>

            </div>
            <span className="text-sm font-[Delius]" >(shaken and salt rimmed - lime juice, orange juice, sparkling water/club soda)</span>
          </li>
          <li >
            <div className="flex justify-between">
            <div className="flex  gap-2  md:text-xl items-center">
              <Asterisk /> Chapman
            </div>
            <span className="text-lg md:text-2xl"></span>

            </div>
          </li>
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="text-xl md:text-2xl font-medium">Soft Drink</h3>
        <span className="text-sm font-[Delius]">First drink on us! Additional drink at 500 each</span>
        <ul className="space-y-2">
          
          <li >
            <div className="flex justify-between">
            <div className="flex  gap-2  md:text-xl items-center">
              <Asterisk /> Water
            </div>
            <span className="text-lg md:text-2xl"></span>

            </div>
            <span className="text-sm font-[Delius]" >(shaken and salt rimmed - lime juice, orange juice, sparkling water/club soda)</span>
          </li>
          <li >
            <div className="flex justify-between">
            <div className="flex  gap-2  md:text-xl items-center">
              <Asterisk /> Schweppes
            </div>
            <span className="text-lg md:text-2xl"></span>

            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default DrinkMenu;

