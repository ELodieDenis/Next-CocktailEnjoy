"use client";
import React from "react";
import Image from "next/image";

const Partners = () => {
  return (
    <div className="bg-zinc-900 flex justify-center w-full pb-10 overflow-hidden">
      <div className="max-w-[1250px] m-auto flex-col flex w-full px-10">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,200,50,0.5)]">
          Nos partenaires :
        </h2>

        <div className="relative w-full overflow-hidden pt-5">
          <div className="flex animate-marquee gap-25">
            <Logos />
            <Logos />
          </div>
        </div>
      </div>
    </div>
  );
};

const Logos = () => (
  <>
    <Image
      src={"/assets/Partners/LogoFranco.webp"}
      alt="Logo Franco Folies de La Rochelle"
      width={120}
      height={100}
      className="grayscale hover:grayscale-0 hover:cursor-pointer"
    />
    <Image
      src={"/assets/Partners/LogoUnivLR.webp"}
      alt="Logo Université La Rochelle"
      width={120}
      height={100}
      className="grayscale hover:grayscale-0 hover:cursor-pointer"
    />
    <Image
      src={"/assets/Partners/LogoGdPavois.webp"}
      alt="Logo Grand Pavois"
      width={160}
      height={100}
      className="grayscale hover:grayscale-0 hover:cursor-pointer"
    />
    <Image
      src={"/assets/Partners/LogoFestivFilm.webp"}
      alt="Logo Festival Film"
      width={120}
      height={100}
      className="grayscale hover:grayscale-0 hover:cursor-pointer"
    />
    <Image
      src={"/assets/Partners/LogoSarabande.webp"}
      alt="Logo Sarabande"
      width={120}
      height={100}
      className="grayscale hover:grayscale-0 hover:cursor-pointer"
    />
  </>
);

export default Partners;
