import React from 'react';
import Image from 'next/image';

const Partners = () => {
    return (
        <>
            <div className='bg-zinc-900 flex justify-center w-full py-5'>
                <div className='max-w-[1250px] m-auto flex-col flex w-full'>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,200,50,0.5)]">Ils nous font confiance :</h2>
                    <marquee behavior="" direction="left">
                        <div className='flex flex-row gap-15 pt-5'>
                            <Image src={"/assets/Partners/LogoFranco.png"} alt='Logo Franco Folies de La Rochelle' width={80} height={80} className='filter inverse brightness-1000'/>
                            <Image src={"/assets/Partners/LogoGdPavois.png"} alt='Logo du Grand Pavois de La Rochelle' width={80} height={80} className='filter inverse brightness-2000'/>
                            <Image src={"/assets/Partners/LogoAquarium.png"} alt="Logo de l'Aquarium de La Rochelle" width={80} height={80} className='filter inverse brightness-20000'/>
                        </div>
                    </marquee>
                </div>
            </div>
        </>
    );
};

export default Partners;