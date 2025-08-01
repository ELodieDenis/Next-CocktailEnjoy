"use client";

import React, {useState, useRef, useEffect} from 'react';
import BtnReservation from './BtnReservation';

const Navbar = () => {
    const [ nav, setNav] = useState(false)
    const refUlNav = useRef()
    const refNav = useRef()

    useEffect(() => (
            console.dir(refNav.current)
    ), [])

    const handleclick = (e) => {
        e.preventDefault()

        setNav(!nav)
    }

    return (
        <>
        <div className='bg-zinc-900 relative'>
            <div className='flex flex-row w-full justify-between items-center px-20 py-3'>
                <img className="w-[160px] h-[85px]" src="/assets/Logo.webp" alt="logo de l'entreprise Cocktail Enjoy" loading="eager" fetchPriority="high"/>

                    <nav ref={refNav} className={`flex items-center ${nav ? " absolute top-27 right-0 p-10 z-10 bg-zinc-900" : "max-lg:hidden "}`}>
                        <ul ref={refUlNav} className={`flex gap-10 ${nav ? "flex-col" : "flex-row"}`}>
                            <li className="hover:cursor-pointer hover:text-amber-300 text-amber-50 hover:scale-103" >Accueil</li>
                            <li className="hover:cursor-pointer hover:text-amber-300 text-amber-50 hover:scale-103" >Prestations</li>
                            <li className="hover:cursor-pointer hover:text-amber-300 text-amber-50 hover:scale-103" >Créations</li>
                            <li className="hover:cursor-pointer hover:text-amber-300 text-amber-50 hover:scale-103" >À propos</li>
                            <li className="hover:cursor-pointer hover:text-amber-300 text-amber-50 hover:scale-103" >Contact</li>
                        </ul>
                    </nav>

                <BtnReservation />

                <img src="/icons/icon_menu.svg" alt="Icon de menu" className='min-lg:hidden' onClick={handleclick}/>
            </div>
        </div>

        </>
    );
};

export default Navbar;