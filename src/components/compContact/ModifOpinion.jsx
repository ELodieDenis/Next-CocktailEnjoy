"use client"

// import { noSSR } from 'next/dynamic';
import React from 'react';
import { useState, useEffect } from 'react';

const ModifOpinion = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [note, setNote] = useState(5)

    const handleClick = () => {
            
    }

    useEffect(() => {
        console.log("Nouvelle valeur :", note)
    }, [note])
    
    return (
        <>
            <section className='text-white px-10 m-auto max-w-3xl'>
                <div>
                    <div className='py-10'>
                        <h2 className='text-2xl font-semibold flex justify-center'>Donner votre avis</h2>
                    </div>
                    <div>
                        <form className='flex flex-col gap-5 w-full'>
                                <div className='flex flex-row gap-6 justify-between'>
                                    <div className='w-full'>
                                        <input 
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            className='border-b-2 rounded-sm bg-zinc-800 p-2 w-full'
                                            type="text" 
                                            placeholder='Prénom'
                                        />
                                    </div>
                                    <div className='w-full'>
                                        <input 
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            type="email"
                                            className='border-b-2 bg-zinc-800 p-2 rounded-sm w-full'
                                            placeholder='Email'
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-row gap-5 w-30'>
                                    <span>Note</span>
                                    <div className='flex flex-row gap-2' onClick={() => handleClick()}>
                                        {[1, 2, 3, 4, 5].map((n) => (
                                            <label key={n} htmlFor={`note-${n}`} className={`cursor-pointer p-3 rounded-md barder ${note === n ? "bg-blue-500 text-white border-blue-500" : "bg-white text-black border-gray-400"}`}>
                                                <input 
                                                    type="radio"
                                                    value={n}
                                                    onChange={(e) => setNote(Number(e.target.value))}
                                                    name='note'
                                                    id={`note-${n}`}
                                                    checked={note === n}
                                                    className='hidden'
                                                />
                                                <span>{n}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <textarea 
                                        name="message"
                                        placeholder='Message...'
                                        className='bg-zinc-800 rounded-sm border-b-2 w-full p-2'
                                    >

                                    </textarea>
                                </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ModifOpinion;