import React from 'react';
import services from "../data/services.json"
import Image from 'next/image';

const Services = () => {
    return (
        <>
            <div className='max-w-[1250px] m-auto px-10 pb-10'>
                <div className=''>
                    <div className='pb-5'>
                        <h2 className='text-3xl font-semibold'>Descriptions des prestations</h2>
                    </div>
                    <div>
                        <div className='flex flex-col w-full object-cover gap-5'>
                            {services.map((service, index) => (
                                <div key={index} className='flex flex-row bg-white rounded-2xl'>
                                    <div>
                                        <Image src={service.image} alt={`Service : ${service.title.toLowerCase()}`} loading='lazy' placeholder='empty' width={400} height={180} style={{ display: "block" }}/>
                                    </div>
                                    <div className='p-5 gap-3 flex flex-col w-full'>
                                        <div className='flex flex-col gap-3'>
                                            <h3 className='font-semibold text-2xl'>{service.title}</h3>
                                            <p>{service.subtitle}</p>
                                        </div> 
                                        <div className='flex justify-center w-full'>
                                            <button className='border border-zinc-900 rounded-4xl px-10 py-1 font-semibold hover:bg-amber-400 hover:cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-amber-400'>{service.seeMore}</button>
                                        </div>
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