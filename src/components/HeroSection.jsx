"use client"

import React from 'react';
import BtnReservation from './BtnReservation';
import imageBar from '@/public/assets/Bar.webp';
import Image from 'next/image';
import imgCocktailBlue from "@/public/assets/ImgHeroSection/CocktailBlue.webp"
import imgCocktailYellow from "@/public/assets/ImgHeroSection/CocktailYellow.webp"
import imgCocktailRed from "@/public/assets/ImgHeroSection/CocktailRed.webp"
import { useRef, useEffect } from 'react';

const HeroSection = () => {
  const refHero = useRef(null)
  const refImg = useRef(null)

  const imgHero = {
    border: "4px solid #88592F",
    width: "250px",
    height: "350px"
  }

  useEffect(() => {
    const elementParent = refHero.current
    const elementChild = refImg.current

    if(!elementParent || !elementChild) return;

    const handleMouseEnter = () => {
      console.log("Hover Hero Section")

      if(elementChild.classList.contains("hidden")) {
        console.log("flex")
        elementChild.classList.add("flex")
        elementChild.classList.remove("hidden")
      } else {
        console.log("erreur flex")
      }
    }

    const handleMouseLeave = () => {
      if(elementChild.classList.contains("flex")) {
        elementChild.classList.remove("flex")
        elementChild.classList.add("hidden")
      }
    }

    elementParent.addEventListener("mouseenter", handleMouseEnter)
    elementParent.addEventListener("mouseleave", handleMouseLeave)
    
    return () => {elementParent.removeEventListener("mouseenter", handleMouseEnter)
    elementParent.removeEventListener("mouseleave", handleMouseLeave)}

  }, [])

  // useEffect(() => {
  //   const 
  // }, [])


  return (
    <div ref={refHero} className="relative h-[85vh] group overflow-hidden hover: cursor-pointer">
        <Image src={imageBar} alt="Bar à cocktails" placeholder="blur" quality={75} fill className="object-cover"  fetchPriority='high' sizes='(max-width: 1250px) 100vw, 1250px'/>
        <div className="absolute inset-0 transition-all duration-300 group-hover:backdrop-blur-sm z-10" />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-between items-center md:py-8 py-5 px-4 text-center z-20">
            <div className="text-white text-4xl drop-shadow-lg">
                <h1>Des cocktails sur-mesure pour vos évènements</h1>
            </div>
            <div ref={refImg} className='hidden flex-row gap-5'>
              <Image src={imgCocktailBlue} alt='Cocktail bleu création' sizes='(max-width: 250px) 20vh, 250px' quality={75} style={imgHero} className='-rotate-15 '/>
              <Image src={imgCocktailYellow} alt='Cocktail bleu création' sizes='(max-width: 250px) 20vh, 250px' quality={75} style={imgHero}/>
              <Image src={imgCocktailRed} alt='Cocktail bleu création' sizes='(max-width: 250px) 20vh, 250px' quality={75} style={imgHero} className='rotate-15'/>
            </div>
            <div>
                <BtnReservation />
            </div>
        </div>
    </div>
  );
};

export default HeroSection;

