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

    const cardRef = useRef(null)
    const imgRef = useRef(null)
    const [stateCard, setStateCard] = useState(false)

    const useCard = (state) => {
        setStateCard(state)
        console.log(stateCard)

        if(!imgRef) return
        if(imgRef) {
            console.log(imgRef.current.classList)
            imgRef.current.classList.add("hidden")
            console.log(imgRef.current.classLidt)
        }

        if(imgRef.current.classList === "hidden") {
            imgRef.current.classLidt.remove("hidden")
        }
    }

    useEffect(() => {
        console.log(imgRef.current.classList)

        // if(!imgRef) return
        // if(imgRef) {
        //     console.log(imgRef.current.classList)
        //     imgRef.current.classList.add("hidden")
        //     console.log(imgRef.current.classLidt)
        // }



        // if(!cardRef) return;

        // if(cardRef) {
        //     console.log(cardRef.current) 
        //     console.log(cardRef.current.classList[1]) 
        //     console.dir(cardRef.current) 
        // }

        // if(cardRef.current.classList[1] === "flex") {
        //     console.log("FLEX")
        //     // cardRef.current.classList.remove("flex")
        //     // cardRef.current.classList.add("hidden")
        //     console.log(cardRef.current.classList)
        // } else {
        //     console.log("ERREUR")
        // }
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
                                <div onMouseEnter={() => useCard(true)} onMouseLeave={() => useCard(false)} ref={cardRef} key={index} data-aos="fade-right" data-aos-delay={index * 250} className='overflow-hidden flex flex-row bg-zinc-800 rounded-2xl h-[160px] w-full relative hover:cursor-pointer'>
                                    <div className='w-full h-auto'>
                                        <Image ref={imgRef} src={service.image} alt={`Service : ${service.title.toLowerCase()}`} loading='lazy' placeholder='empty' fill className='object-cover'/>
                                    </div>
                                    <div className='absolute p-6 gap-3 flex w-1/2 h-full'>
                                        <h3 className='font-semibold text-2xl'>{service.title}</h3>
                                        {/* <p>{service.subtitle}</p> */}
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