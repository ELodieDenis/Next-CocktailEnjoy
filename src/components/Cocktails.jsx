import React from 'react';
import cocktails from "../data/cocktails.json"
import Image from 'next/image';
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

const Cocktails = () => {


    return (
        <div className='text-white'>
            <div className='max-w-[1250px] mx-auto px-10 h-auto'>
                <div className='flex text-3xl font-semibold py-5'>
                    <h2>Créations cocktails</h2>
                </div>

                <div className=' overflow-x-auto flex no-scrollbar overflow-y-hidden'>
                    <ul className='flex gap-10 flex-row w-full'>
                        {cocktails.map((cocktail, index) => (
                            <li key={index} className='bg-zinc-800 gap-5 flex-col rounded-2xl flex min-w-[260px] min-h-[150px] w-full max-w-screen overflow-hidden'>
                                <div className='flex justify-center'>
                                    <Image src={cocktail.image} alt={`Cocktail : ${cocktail.title.toLowerCase()}`} loading='lazy' placeholder='empty' width={280} height={150} style={{ display: "block"}}/>
                                </div>
                                <div className='p-5 flex flex-1 gap-5 flex-col justify-between'>
                                    <div className='gap-3 flex flex-col'>
                                        <div className='text-2xl font-semibold'>{cocktail.title}</div>
                                        <div>{cocktail.subtitle}</div>
                                    </div> 
                                    <div className='flex justify-center items-end'>
                                        <button className='border rounded-2xl py-1 px-10 transform transition-all ease-in-out duration-300 hover:bg-amber-400 hover:border-amber-400 hover:text-zinc-900 hover:shadow-2xl hover:shadow-amber-400 hover:cursor-pointer'>{cocktail.seeMore}</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='flex w-full gap-5 justify-end items-center'>
                    <button>
                        <IoIosArrowRoundBack className='size-10'/>
                    </button>
                    <button>
                        <IoIosArrowRoundForward className='size-10'/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cocktails;