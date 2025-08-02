"use client";

import React, { useState, useRef, useEffect } from "react";
import BtnReservation from "./BtnReservation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const refHeader = useRef()

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    useEffect(() => {
        const handleResize = () => {
            if(document.documentElement.clientWidth >= 1024) {
                console.log("trop petit")
                setIsMenuOpen(false)
            }
            console.log(document.documentElement.clientWidth)
        }

        handleResize()

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)

    }, [])

  return (
    <header ref={refHeader} className="bg-zinc-900 relative">
      <div className="flex items-center justify-between px-20 py-3 w-full">
        <a href="/" aria-label="Page d'accueil Cocktail Enjoy">
          <img src="/assets/Logo.webp" alt="Logo de l'entreprise Cocktail Enjoy" className="w-[160px] h-[85px]" loading="eager" fetchPriority="high" width="160"height="85"
          />
        </a>

        <nav className={`${ isMenuOpen ? "flex flex-col gap-8 absolute top-[6.75rem] right-0 p-10 z-20 bg-zinc-900 w-full max-w-xs shadow-lg" : "hidden lg:flex" } items-center`} aria-label="Menu principal">
            <ul className={`flex ${isMenuOpen ? "flex-col gap-6" : "flex-row gap-10"}`}>
                {["Accueil", "Prestations", "Créations", "À propos", "Contact"].map((item) => (
                    <li key={item}>
                        <a href={`#${item.toLowerCase()}`} className="text-amber-50 hover:text-amber-300 transition-transform transform hover:scale-[1.03]">
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
            <BtnReservation className="lg:hidden" />
        </nav>

        <BtnReservation className="hidden lg:flex" />

        <button onClick={toggleMenu} className="lg:hidden focus:outline-none" aria-label="Ouvrir ou fermer le menu" aria-expanded={isMenuOpen} aria-controls="mobile-menu">
            <img src="/icons/icon_menu.svg" alt="Icône menu" className="w-6 h-6" width="24" height="24"/>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
