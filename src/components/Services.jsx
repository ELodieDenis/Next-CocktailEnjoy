import React from 'react';
import services from "../data/services.json"
import Image from 'next/image';

const Services = () => {
    return (
        <>
            <div className='max-w-[1250px] m-auto px-10 pb-10 text-white'>
                <div className=''>
                    <div className='pb-5'>
                        <h2 className='text-3xl font-semibold'>Descriptions des prestations</h2>
                    </div> 
                    <div>
                        <div className='flex flex-col w-full object-cover gap-5'>
                            {services.map((service, index) => (
                                <div key={index} className='overflow-hidden flex flex-row bg-zinc-800 rounded-2xl'>
                                    <div>
                                        <Image src={service.image} alt={`Service : ${service.title.toLowerCase()}`} loading='lazy' placeholder='empty' width={230} height={180} className='w-[230px] h-[180px] object-cover'/>
                                    </div>
                                    <div className='p-6 gap-3 flex flex-col w-full justify-between'>
                                        <div className='flex flex-col gap-3'>
                                            <h3 className='font-semibold text-2xl'>{service.title}</h3>
                                            <p>{service.subtitle}</p>
                                        </div> 
                                        <div className='flex justify-center w-full'>
                                            <button className='rounded-4xl px-10 py-1 font-semibold bg-amber-400 hover:cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-amber-400 text-zinc-900'>{service.seeMore}</button>
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