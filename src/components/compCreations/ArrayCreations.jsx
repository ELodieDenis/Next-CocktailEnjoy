"use client"

import React from 'react';
import cocktails from '../../data/cocktails.json';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const ArrayCreations = () => {
    const btnRef = useRef(null)
    // const [stateBtn, setStateBtn] = useState("false")
    const [stockValueTitle, setStockValueTitle] = useState("")

    useEffect(() => {
        console.log(btnRef.current)
        console.dir(btnRef.current)
    }, [])

    const handleClickBtn = (e) => {
        e.preventDefault()
        if(!btnRef.current) return;

        const inputValue = btnRef.current.value

        if(!inputValue) {
            console.log("champ vide")
            return
        }

        const foundCocktail = cocktails.filter(
            (cocktail) => cocktail.title === inputValue
        )

        console.log(foundCocktail)

        if(foundCocktail) {
            setStockValueTitle(foundCocktail)
        }

        if(!foundCocktail) return

        console.log(foundCocktail)
        console.log(foundCocktail.title)
    }

    const handleClickBtnRefresh = (e) => {
        e.preventDefault()
        console.log("clic croix")

        if(!stockValueTitle) {
            console.log("PAS DE VALEUR TITLE")
            return
        } 

        setStockValueTitle("")

        if(btnRef.current) {
            btnRef.current.value = ""
        }
    }

    return (
        <>
            <div className='max-w-[1250px] m-auto px-10 pb-10 text-white max-md:px-2'>
                <div>
                    <div className='flex max-md:justify-center'>
                        <h1 className='text-3xl font-semibold'>Créations cocktails</h1>
                    </div>
                    <div className='py-10'>
                        <form className='flex flex-row gap-5'>
                            <h3>Nom du cocktail</h3>
                            <input ref={btnRef} className='border' type="text" placeholder='Recherche...' />
                            <button onClick={handleClickBtn} className=' hover:bg-amber-400 hover:text-zinc-900 px-5 hover:cursor-pointer'>Recherche</button>
                            <button onClick={handleClickBtnRefresh} className=' hover:bg-red-400 hover:text-zinc-900 px-5 hover:cursor-pointer'>X</button>
                        </form>
                    </div>
                    {stockValueTitle && <div className='w-full flex flex-col justify-center gap-3'>
                        <div className='flex justify-center'>
                            <Image src={stockValueTitle.image2} alt={stockValueTitle.title} width={180} height={250}/>
                        </div>
                        <div className='flex justify-center'>
                            <div className='flex flex-col text-center gap-3 w-1/2'>
                                <h3 className='font-semibold text-2xl'>{stockValueTitle.title}</h3>
                                <p>{stockValueTitle.subtitle}</p>
                            </div>
                        </div>
                    </div>}
                    <div>
                        {!stockValueTitle ? (
                            <div>
                                <ul className='grid grid-cols-2 max-md:grid-cols-1'>
                                    {cocktails.map((cocktail, index) => (
                                        <li key={index} className='flex justify-center'>
                                            <div className='flex flex-col justify-center gap-3'>
                                                <div className='flex justify-center'>
                                                    <Image src={cocktail.image2} alt={cocktail.title} width={180} height={250} className='w-full h-auto'/>
                                                </div>
                                                <div className='flex flex-col justify-center text-center max-w-[300px] gap-3'>
                                                    <h3 className='font-semibold text-2xl'>{cocktail.title}</h3>
                                                    <p>{cocktail.subtitle}</p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ArrayCreations;