import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaInstagram } from "react-icons/fa6"
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
    return (
        <>
            <div className='text-white'>
                <div className='max-w-[1250px] m-auto px-10 py-10 flex flex-row justify-between max-md:grid max-md:grid-cols-3 gap-10'>
                    <div className='max-md:col-span-3'>
                        <a href="/" aria-label="Logo de l'entreprise Cocktail Enjoy">                        
                            <Image src="/assets/Logo.webp" alt='Logo Cocktail Enjoy' width={200} height={106}/>
                        </a>
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
                            <a href="/" className='hover:text-amber-400 hover:cursor-pointer hover:scale-105'>Accueil</a>
                            <a href="/prestations" className='hover:text-amber-400 hover:cursor-pointer hover:scale-105'>Prestations</a>
                            <a href="/creations" className='hover:text-amber-400 hover:cursor-pointer hover:scale-105'>Créations</a>
                            <a href="#" className='hover:text-amber-400 hover:cursor-pointer hover:scale-105'>À propos</a>
                            <a href="/reservation" className='hover:text-amber-400 hover:cursor-pointer hover:scale-105'>Contact</a>
                        </div>
                    </div>
                    <div className='flex gap-6 flex-col'>
                        <div className='font-semibold'>NOS RÉSEAUX</div>
                        <div className='flex flex-row gap-5 max-md:flex-col'>
                            <a href="https://www.facebook.com/profile.php?id=100083158819638#" aria-label="Logo Facebook" target='_blank'>
                                <FaFacebook className='size-10 hover:cursor-pointer hover:scale-105 hover:text-amber-400'/>
                            </a>
                            <a href="https://www.instagram.com/cocktail.enjoy/?hl=fr" aria-label="Logo Instagram" target='_blank'>
                                <FaInstagram className='size-10 hover:cursor-pointer hover:scale-105 hover:text-amber-400'/>
                            </a>
                            <a href="https://fr.linkedin.com" aria-label="Logo Instagram" target='_blank'>
                                <IoLogoLinkedin className='size-10 hover:cursor-pointer hover:scale-105 hover:text-amber-400'/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;