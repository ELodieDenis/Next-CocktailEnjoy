import React from 'react';
import Image from 'next/image';
import PhotoFace from "@/public/assets/PhotoFace.webp"

const WhoAreYou = () => {
    return (
        <>
            <div className='w-full'>
                <div className='flex flex-col md:flex-row max-w-[1250px] mx-auto px-10 py-15 justify-between'>
                    <div className='flex flex-col gap-5 '>
                        <div>
                            <h2 className='text-2xl font-semibold'>Qui sommes-nous ?</h2>
                        </div>
                        <div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, accusamus temporibus. Illum reiciendis culpa minus quia quaerat. Earum in ex dolores velit dolore quo suscipit expedita sed consectetur, doloribus eaque.</p>
                        </div>
                        <div className='flex w-full justify-center'>
                            <a href="#reservation" aria-label='Page de réservation'>
                                <button className="flex items-center justify-center border-zinc-900 rounded-4xl h-10 p-6 text-zinc-900 hover:bg-amber-400 hover:cursor-pointer hover:scale-105 border-2 text-2xl">A propos</button>
                            </a>
                        </div>
                    </div>
                    <div className='min-md:w-1/3 flex justify-end max-md:justify-center '>
                        <Image src={PhotoFace} alt='Photo du barman professionnel' className='flex'/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhoAreYou;