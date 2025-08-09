import React from 'react';
import BtnReservation from './BtnReservation';
import imageBar from '@/public/assets/Bar.webp';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative h-[85vh] group overflow-hidden hover: cursor-pointer">
        <Image src={imageBar} alt="Bar à cocktails" placeholder="blur" quality={75} fill className="object-cover" priority fetchPriority='high' sizes='(max-width: 1250px) 100vw, 1250px'/>
        <div className="absolute inset-0 transition-all duration-300 group-hover:backdrop-blur-sm z-10" />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-between items-center md:py-16 py-10 px-4 text-center z-20">
            <div className="text-white text-4xl drop-shadow-lg">
                <h1>Des cocktails sur-mesure pour vos évènements</h1>
            </div>
            <div>
                <BtnReservation />
            </div>
        </div>
    </div>
  );
};

export default HeroSection;

