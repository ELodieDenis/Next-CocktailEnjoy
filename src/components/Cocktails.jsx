"use client"

import React from 'react';
import cocktails from "../data/cocktails.json"
import Image from 'next/image';
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import {  useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import "aos/dist/aos.css";


const Cocktails = () => {
    const refUl = useRef(null)
    const [scrollX, setScrollX] = useState(0)
    const [maxScrollX, setMaxScrollX] = useState(0)
    const [hoverDiv, setHoverDiv] = useState(false)

    useEffect(() => {
        const el = refUl.current;

        if (!el) return;

        const updateMaxScrollX = () => {
            setMaxScrollX(el.scrollWidth - el.clientWidth)
        }

        updateMaxScrollX()

        const handleScroll = () => {
            setScrollX(el.scrollLeft);
        };

        el.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", updateMaxScrollX)

        return () => {el.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", updateMaxScrollX)}
    }, []);

    const handleClickLeft = () => {
        if (!refUl.current) return;
        refUl.current.scrollBy({ left:250, behavior: "smooth" });
    };

    const handleClickRight = () => {
        if (!refUl.current) return;
        refUl.current.scrollBy({ left: -250, behavior: "smooth" }); 

    };

    const hoverSlider = (state) => {
        setHoverDiv(state)
    }

    useEffect(() => {
        AOS.init({
          duration: 600, // durée de l'animation en ms
          once: true,
          delay: 150    // si true = animation se joue une seule fois
        });
    }, []);

    return (
        <div className='text-white' onMouseEnter={() => hoverSlider(true)} onMouseLeave={() => hoverSlider(false)}>
            <div className='max-w-[1250px] mx-auto px-10 py-10 h-auto'>
                <div className='flex text-3xl font-semibold pb-5'>
                    <Link rel="stylesheet" href="/creations">
                        <h2>Créations cocktails</h2>
                    </Link>
                </div>

                <div className='relative'>
                    <div ref={refUl} className='overflow-x-auto flex no-scrollbar '>
                        <ul className='flex gap-10 flex-row w-full px-auto'>
                            {cocktails.map((cocktail, index) => (
                                <li data-aos="fade-up" data-aos-delay={index * 250} key={index} className=' bg-zinc-800 flex-col rounded-2xl flex min-w-[280px] min-h-[150px] max-w-screen overflow-hidden hover:cursor-pointer'>
                                    <div className='overflow-hidden rounded-2xl transition-transform duration-150 ease-in-out hover:scale-105 h-full flex flex-col'>
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
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='flex flex-row gap-5 py-5 justify-end'>
                        <button  onClick={handleClickRight} className='hover:cursor-pointer'>
                            <IoIosArrowRoundBack className={`size-8 ${scrollX > 0 && hoverDiv === true ? "animate-pulse ring ring-amber-400 bg-amber-400 rounded-full shadow-[0_0_10px_2px_rgba(251,191,36,0.3)]" : ""}`} />
                        </button>
                        <button onClick={handleClickLeft} className='hover:cursor-pointer'>
                            <IoIosArrowRoundForward className={`size-8 ${scrollX < maxScrollX && hoverDiv === true ? "animate-pulse ring ring-amber-400 rounded-full shadow-[0_0_10px_2px_rgba(251,191,36,0.3)] bg-amber-400" : ""}`}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cocktails;