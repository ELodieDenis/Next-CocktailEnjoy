import React from 'react';
import cocktails from '../../data/cocktails.json';
import Image from 'next/image';

const ArrayCreations = () => {
    const radius = 120; // rayon du cercle
    const center = radius; // centre (x, y)
    const total = cocktails.length;

    return (
        <>
            <div>
                <div>
                    <h1>Créations cocktails</h1>
                </div>
                <div>
                    <div>
                        <ul>
                            {cocktails.map((cocktail, index) => (
                                <li>
                                    <div>
                                        <Image src={cocktail.image2} alt={cocktail.title} width={180} height={250}/>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <ul className='grid grid-cols-2'>
                            {cocktails.map((cocktail, index) => (
                                <li key={index} className='flex justify-center'>
                                    <div className='flex flex-col justify-center'>
                                        <div className='flex justify-center'>
                                            <Image src={cocktail.image2} alt={cocktail.title} width={180} height={250}/>
                                        </div>
                                        <div className='flex flex-col justify-center text-center max-w-[300px]'>
                                            <p>{cocktail.title}</p>
                                            <p>{cocktail.subtitle}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ArrayCreations;