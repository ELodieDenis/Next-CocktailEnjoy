import React from 'react';
import Image from 'next/image';
import PhotoFace from "@/public/assets/PhotoFace.webp"

const WhoAreYou = () => {
    return (
        <>
            {/* <div className='w-full text-white'>
                <div className='flex flex-col md:flex-row max-w-[1250px] mx-auto py-15 justify-between px-10'>
                    <div className='flex flex-col gap-5'>
                        <div>
                            <h2 className='text-3xl font-semibold'>Qui sommes-nous ?</h2>
                        </div>
                        <div className='flex-col-reverse md:flex-row flex gap-5 w-full'>
                            <div className='flex items-center md:w-3/4'>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, accusamus temporibus. Illum reiciendis culpa minus quia quaerat. Earum in ex dolores velit dolore quo suscipit expedita sed consectetur, doloribus eaque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore dolor ab vero officiis dolorem, ipsum, cumque molestias alias tempora neque blanditiis dolores, delectus ea necessitatibus consequuntur ut veritatis. Blanditiis, nulla.</p>
                            </div>
                            <div className='flex md:justify-end md:w-1/4 justify-center'>
                                <Image src={PhotoFace} alt='Photo du barman professionnel - Benjamin Denis' loading='lazy'/>
                            </div>
                        </div>
                        <div className='flex w-full justify-center'>
                            <a href="#reservation" aria-label='Page de réservation'>
                                <button className="flex items-center justify-center transform transition-all ease-in-out duration-300 rounded-4xl h-10 px-8 text-white border border-white hover:cursor-pointer hover:scale-103 text-xl hover:shadow-amber-400 hover:shadow-2xl hover:bg-amber-400 hover:border-amber-400 hover:text-zinc-900">A propos</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default WhoAreYou;