"use client";

import React, { useState } from "react";
import BtnReservation from "./BtnReservation";
import Image from "next/image";
import imageBar from "@/public/assets/Bar.webp";
import imgCocktailBlue from "@/public/assets/ImgHeroSection/CocktailBlue.webp";
import imgCocktailYellow from "@/public/assets/ImgHeroSection/CocktailYellow.webp";
import imgCocktailRed from "@/public/assets/ImgHeroSection/CocktailRed.webp";
import { EB_Garamond } from "next/font/google";

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const HeroSection = () => {
  const [showImages, setShowImages] = useState(false);

  return (
    <div
      className="relative h-[85vh] md:h-[90vh] overflow-hidden"
      onMouseEnter={() => setShowImages(true)}
      onMouseLeave={() => setShowImages(false)}
    >
      <Image
        src={imageBar}
        alt="Bar à cocktails"
        fill
        priority
        quality={75}
        className="object-cover"
        sizes="(max-width: 1250px) 100vw, 1250px"
      />

      <div className="absolute inset-0 bg-black/30 z-10" />

      <div className="absolute inset-0 z-20 flex flex-col justify-between items-center md:py-8 py-5 px-4 text-center">
        <h1
          className={`${garamond.className} text-white text-4xl md:text-5xl font-bold leading-tight min-h-[5rem]`}
          style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.7)" }}
        >
          Des cocktails sur-mesure pour vos évènements
        </h1>

        <div className="flex flex-row gap-5 h-[350px] md:h-[350px] max-md:h-[250px]">
          {[imgCocktailBlue, imgCocktailYellow, imgCocktailRed].map((img, idx) => (
            <div
              key={idx}
              className={`relative w-[250px] h-[350px] max-md:w-[180px] max-md:h-[250px] border-4 border-[#88592F] transform transition-all duration-300 ease-out ${
                showImages ? "opacity-100 visible" : "opacity-0 invisible"
              } ${
                idx === 0 ? "-rotate-15" : idx === 2 ? "rotate-15" : ""
              } hover:scale-110 hover:cursor-pointer`}
            >
              <Image
                src={img}
                alt={`Cocktail ${idx}`}
                fill
                quality={75}
                loading="lazy"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div>
          <BtnReservation />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
