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
        } else {
            setHoverIndex(null)
        }
    }

    useEffect(() => {
        console.log(imgRef.current.classList)
        console.log(cardRef.current)
    }, [])


    return (
        <>
            <div className='max-w-[1250px] m-auto px-10 py-10 text-white'>
                <div className=''>
                    <div className='pb-5'>
                        <Link href="/prestations">
                            <h2 className='text-3xl font-semibold'>Descriptions des prestations</h2>
                        </Link>
                    </div> 
                    <div>
                        <div className='flex flex-col w-full object-cover gap-5'>
                            {services.map((service, index) => (
                                <div onMouseEnter={() => useCard(true, index)} onMouseLeave={() => useCard(false, index)} ref={(el) => (cardRef.current[index]) = el} key={service.index} data-aos="fade-right" data-aos-delay={index * 250} className={"overflow-hidden flex flex-row rounded-2xl h-[200px] w-full relative hover:cursor-pointer"}>
                                    <div ref={(el) => (imgRef.current[index]) = el} className={`relative h-full transition-all duration-1000 ease-in-out ml-auto ${hoverIndex === index ? "w-1/2" : "w-full"}`}>
                                        <Image src={service.image} alt={`Service : ${service.title.toLowerCase()}`} loading='lazy' placeholder='empty' fill className="object-cover" />
                                    </div>
                                    <div className={`${hoverIndex === index ? "absolute p-6 gap-3 flex w-1/2 h-full flex-col bg-zinc-800 transform transition-all ease-in-out duration-500 max-md:w-full" : "absolute p-6 gap-3 flex w-1/2 h-full flex-col max-md:w-full"}`}>
                                        <h3 className='font-semibold text-2xl hover:scale-103 hover:text-amber-400'>{service.title}</h3>
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