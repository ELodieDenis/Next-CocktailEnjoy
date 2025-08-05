import React from 'react';

const BtnReservation = ({className = ""}) => {
    return (
        <>
            <a href="#reservation" aria-label='Page de réservation'>
                <button className={`${className} flex items-center justify-center border-amber-50 rounded-4xl h-10 p-6 text-amber-50 hover:bg-amber-400 hover:cursor-pointer hover:scale-105 border-2 text-2xl`}>Réservation</button>
            </a>
        </>
    );
};

export default BtnReservation;