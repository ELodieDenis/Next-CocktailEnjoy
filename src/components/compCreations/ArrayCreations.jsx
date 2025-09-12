"use client"

import React, { useState } from 'react';
import cocktails from '../../data/cocktails.json';
import Image from 'next/image';

const ArrayCreations = () => {
    const [inputValue, setInputValue] = useState("");
    const [selectedCocktail, setSelectedCocktail] = useState(null); 
    const [cocktailSelect, setCocktailSelect] = useState(null);

    const handleSearch = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const foundCocktail = cocktails.find((cocktail) => cocktail.title.toLowerCase() === inputValue.toLowerCase());

        setSelectedCocktail(foundCocktail || null); 
    };

    const handleReset = (e) => {
        e.preventDefault();
        setSelectedCocktail(null);
        setInputValue("");
    };

    const handleToggleDetail = (index) => {
        setCocktailSelect((cocktailSelect === index ? null : index));
    };

    return (
        <div className="max-w-[1250px] m-auto px-10 pb-10 text-white max-md:px-2">
            <div className="flex max-md:justify-center py-10">
                <h1 className="text-3xl font-semibold">Créations cocktails</h1>
            </div>

            <div className="pb-10">
                <form className="flex flex-row gap-5">
                <h3>Nom du cocktail</h3>
                <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="border"
                    type="text"
                    placeholder="Recherche..."
                />
                <button
                    onClick={handleSearch}
                    className="text-amber-400 hover:bg-amber-400 hover:text-zinc-900 px-5 hover:cursor-pointer border rounded-sm"
                >
                    Recherche
                </button>
                <button
                    onClick={handleReset}
                    className="text-red-400 hover:bg-red-400 hover:text-zinc-900 px-5 hover:cursor-pointer border rounded-sm"
                >
                    X
                </button>
                </form>
            </div>

            {selectedCocktail && (
                <div className="flex flex-col justify-center gap-3">
                    <div className="flex justify-center">
                        <Image
                        src={selectedCocktail.image2}
                        alt={selectedCocktail.title}
                        width={180}
                        height={250}
                        />
                    </div>
                    <div className="flex justify-center">
                        <div className="flex flex-col text-center gap-3 w-1/2">
                            <h3 className="font-semibold text-2xl">{selectedCocktail.title}</h3>
                            <p>{selectedCocktail.subtitle}</p>
                        </div>
                    </div>
                    <div className='w-full flex justify-center'>
                        <div className="flex flex-col max-w-[300px]">
                            <div className="flex flex-col items-center gap-2">
                                <button
                                    onClick={() => handleToggleDetail(selectedCocktail.index)}
                                    className="border rounded-2xl hover:cursor-pointer hover:bg-amber-400 w-6"
                                >
                                    +
                                </button>
                                {cocktailSelect && <p className="text-center">{selectedCocktail.detail}</p>}
                            </div>
                        </div>
                    </div>
                    
                </div>
            )}

            {!selectedCocktail && (
                <ul className="grid grid-cols-2 max-md:grid-cols-1">
                    {cocktails.map((cocktail, index) => (
                        <li key={index} className="flex justify-center">
                            <div className="flex flex-col justify-center gap-3">
                                <div className="flex justify-center">
                                    <Image
                                        src={cocktail.image2}
                                        alt={cocktail.title}
                                        width={180}
                                        height={250}
                                        className="w-full h-auto"
                                    />
                                </div>
                                <div className="flex flex-col justify-center text-center max-w-[300px] gap-3 w-full">
                                    <h3 className="font-semibold text-2xl">{cocktail.title}</h3>
                                    <p>{cocktail.subtitle}</p>
                                </div>
                                <div className="flex justify-center flex-col text-center max-w-[300px]">
                                    <div className="flex w-full justify-center">
                                        <button
                                            onClick={() => handleToggleDetail(index)}
                                            className="border rounded-2xl hover:cursor-pointer hover:bg-amber-400 w-6"
                                        >
                                            +
                                        </button>
                                    </div>
                                    {cocktailSelect === index && <p>{cocktail.detail}</p>}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ArrayCreations;
