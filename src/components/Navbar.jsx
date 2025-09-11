"use client";

import React, { useState, useRef, useEffect } from "react";
import BtnReservation from "./BtnReservation";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [stateItem, setStateItem] = useState("")
  const refHeader = useRef()

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const navItems = [
    { name: "Accueil", href: "/"},
    { name: "Prestations", href: "/prestations"},
    { name: "Créations", href: "/creations"},
    { name: "À propos", href: "/apropos"},
    { name: "Contact", href: "/reservation"}
  ]

    useEffect(() => {
        const handleResize = () => {
          if(document.documentElement.clientWidth >= 1024) {
            setIsMenuOpen(false)
          }
        }

        handleResize()

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)

    }, [])

  return (
    <header ref={refHeader} className="bg-zinc-900 relative">
      <div className="flex items-center justify-between px-20 py-3 w-full">
        <a href="/" aria-label="Page d'accueil Cocktail Enjoy">
          <Image src="/assets/Logo.webp" alt="Logo de l'entreprise Cocktail Enjoy" className="w-[100px] h-[53px]"  priority width={100} height={53}/>
        </a>

        <nav className={`${ isMenuOpen ? "flex flex-col gap-8 absolute top-[4.5rem] right-0 p-6 z-200 bg-zinc-900 w-full max-w-[250px] shadow-lg" : "hidden lg:flex" } items-center`} aria-label="Menu principal">
            <ul className={`flex ${isMenuOpen ? "flex-col gap-6" : "flex-row gap-10"}`}>
                {navItems.map((item) => (
                  <li key={item.name} className="hover:scale-105">
                      <Link href={item.href} className="text-amber-50 hover:text-amber-300 transition-transform transform">
                          {item.name}
                      </Link>
                  </li> 
                ))}
            </ul>
            <BtnReservation className="lg:hidden" />
        </nav>

        <BtnReservation className="hidden lg:flex" />

        <button onClick={toggleMenu} className="lg:hidden focus:outline-none" aria-label="Ouvrir ou fermer le menu" aria-expanded={isMenuOpen} aria-controls="mobile-menu">
            <img src="/icons/icon_menu.svg" alt="Icône menu" className="w-6 h-6 hover:cursor-pointer" width="24" height="24"/>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
