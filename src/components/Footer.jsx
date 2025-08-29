import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <>
            <div className='text-white'>
                <div className='max-w-[1250px] m-auto px-10 py-10 flex flex-row justify-between'>
                    <div>
                        <Image src="/assets/Logo.webp" alt='Logo Cocktail Enjoy' width={200} height={106}/>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <h3 className='font-semibold'>COORDONNÉES</h3>
                        <div className='flex flex-col gap-2'>
                            <div>
                                <p>xx rue xx</p>
                                <p>Code postale</p>
                            </div>
                            <div>
                                xx - xx - xx - xx - xx
                            </div>
                            <div>xxxx@xxxx.orange.fr</div>
                        </div>
                    </div>
                    <div className='gap-6 flex flex-col'>
                        <h3 className='font-semibold'>NAVIGATION</h3>
                        <div className='flex flex-col gap-2'>
                            <a href="#">Accueil</a>
                            <a href="#">Prestations</a>
                            <a href="#">Créations</a>
                            <a href="#">À propos</a>
                            <a href="#">Contact</a>
                        </div>
                    </div>
                    <div>
                        <div>NOS RÉSEAUX</div>
                        <div>
                            <Image src="/icons/fa.png" alt='Logo Facebook' width={50} height={50}/>
                            <a href="#"></a>
                            <a href="#"></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;