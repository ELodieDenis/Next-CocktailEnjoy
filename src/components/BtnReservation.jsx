import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";

const BtnReservation = ({className = ""}) => {
    return (
        <>
            <a href="#reservation" aria-label='Page de réservation'>
                <div className={` ${className} group transition-transform duration-300 flex flex-row border-amber-400 rounded-4xl bg-amber-400 hover:bg-zinc-900 border-2 px-5 py-2 justify-between w-55 hover:cursor-pointer hover:scale-103 hover:text-amber-400`}>
                    <button className={`flex items-center justify-center text-2xl hover:cursor-pointer`}>Réservation</button>
                    <div className='flex items-center'>
                        <IoIosArrowRoundForward className='size-10 transform transition-transform duration-300 group-hover:translate-x-2'/>
                    </div>
                </div>
            </a>
        </>
    );
};

export default BtnReservation;