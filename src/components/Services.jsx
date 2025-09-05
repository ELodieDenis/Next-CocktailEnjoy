"use client"

import React from 'react';
import services from "../data/services.json"
import Image from 'next/image';
import Link from 'next/link';
import AOS from "aos";
import "aos/dist/aos.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useRef, useState, useEffect } from 'react';

const Services = () => {
    useEffect(() => {
        AOS.init({
            duration: 600,
            once: true,
            delay: 150
        });
    }, []);

    const cardRef = useRef([])
    const imgRef = useRef([])
    const [stateCard, setStateCard] = useState(false)
    const [hoverIndex, setHoverIndex] = useState(null)

    const useCard = (state, index) => {
        setStateCard((prev) => !prev)

        const img = imgRef.current[index]
        if(!img) return

        if(state) {
            setHoverIndex(index)
            // img.classList.add("hidden")
            // img.classList.remove("flex")
        } else {
            setHoverIndex(null)
            // img.classList.remove("hidden")
            // img.classList.add("flex")
        }
    }

    useEffect(() => {
        console.log(imgRef.current.classList)
        console.log(cardRef.current)
    }, [])


    return (
        <>
            <div className='max-w-[1250px] m-auto px-10 pb-10 text-white'>
                <div className=''>
                    <div className='pb-5'>
                        <Link href="/prestations">
                            <h2 className='text-3xl font-semibold'>Descriptions des prestations</h2>
                        </Link>
                    </div> 
                    <div>
                        <div className='flex flex-col w-full object-cover gap-5'>
                            {services.map((service, index) => (
                                <div onMouseEnter={() => useCard(true, index)} onMouseLeave={() => useCard(false, index)} ref={(el) => (cardRef.current[index]) = el} key={service.index} data-aos="fade-right" data-aos-delay={index * 250} className={"overflow-hidden flex flex-row  rounded-2xl h-[160px] w-full relative hover:cursor-pointer bg-zinc-800"}>
                                    <div ref={(el) => (imgRef.current[index]) = el} className={"flex w-full h-auto"}>
                                        <Image src={service.image} alt={`Service : ${service.title.toLowerCase()}`} loading='lazy' placeholder='empty' fill className="object-cover" />
                                    </div>
                                    <div className={`${hoverIndex === index ? "absolute p-6 gap-3 flex w-1/2 h-full flex-col bg-zinc-800 transform transition-all ease-in-out duration-500" : "absolute p-6 gap-3 flex w-1/2 h-full flex-col"}`}>
                                        <h3 className='font-semibold text-2xl'>{service.title}</h3>
                                        {hoverIndex === index && <p>{service.subtitle}</p>}
                                    </div> 
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;





                                        // <div className='flex justify-center w-full'>
                                        //     <button className='rounded-4xl px-10 py-1 font-semibold text-white border border-white transform transition-all ease-in-out duration-300 hover:bg-amber-400 hover:text-zinc-900 hover:border-amber-400 hover:cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-amber-400'>{service.seeMore}</button>
                                        //     <button className='rounded-4xl px-10 py-1 font-semibold text-white border border-white transform transition-all ease-in-out duration-300 hover:bg-amber-400 hover:text-zinc-900 hover:border-amber-400 hover:cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-amber-400'>
                                        //         <IoIosArrowRoundForward className='size-10 transition-all transform duration-300 group-hover:translate-x-2 rotate-180 hover:rotate-0'/>
                                        //     </button>
                                        // </div>