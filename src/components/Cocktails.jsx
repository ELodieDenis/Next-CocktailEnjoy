import React from 'react';
import cocktails from "../data/cocktails.json"
import Image from 'next/image';

const Cocktails = () => {
    return (
        <div className='text-white'>
            <div className=''>
                <div className='flex max-w-[1250px] m-auto text-3xl font-semibold py-5'>
                    <h2>Créations cocktails</h2>
                </div>
                <div className='flex w-full justify-center'>
                    <div className='max-w-[1250px] flex gap-15'>
                        {cocktails.map((cocktail, index) => (
                            <div key={index} className='bg-zinc-800 gap-5 flex flex-col rounded-2xl overflow-hidden'>
                                <div className='flex justify-center'>
                                    <Image src={cocktail.image} alt={`Cocktail : ${cocktail.title.toLowerCase()}`} loading='lazy' placeholder='empty' width={230} height={150} style={{ display: "block" }}/>
                                </div>
                                <div>
                                    <div>
                                        <div>{cocktail.title}</div>
                                        <div>{cocktail.subtitle}</div>
                                    </div>
                                    <div>
                                        <button>{cocktail.seeMore}</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cocktails;