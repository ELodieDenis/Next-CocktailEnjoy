"use client"

import React from 'react';
import { useState } from 'react';

const ModifOpinion = () => {
    const [username, setUsername] = useState("")
    
    return (
        <>
            <section className='text-white max-w-[1250px] m-auto px-10'>
                <div>
                    <div className='py-10'>
                        <h2 className='text-2xl font-semibold'>Donner votre avis</h2>
                    </div>
                    <div>
                        <form>
                            <div>
                                <input 
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className='border-b-2 rounded-sm bg-zinc-800 p-2'
                                    type="text" 
                                    placeholder='Prénom'/>
                            </div>
                            <div>
                                <input 
                                    type="range" 
                                    min={0} max={5} step={1} 
                                    name='Note'
                                    />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ModifOpinion;