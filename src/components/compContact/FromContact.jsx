import React from 'react';

const FromContact = () => {
    return (
        <>
            <div className='text-white'>
                <div className='flex flex-col max-w-[1250px] mx-auto px-10 py-10'>
                    <div className='flex justify-center'>
                        <form>
                            <div className='flex w-full pb-10'>
                                <h2 className='text-2xl font-semibold'>Formulaire de contact</h2>
                            </div>
                            <ul className='grid grid-cols-1 w-150 border p-15 gap-10'>
                                <div className='flex flex-row w-full justify-between'>
                                    <li className='border-b-2 bg-zinc-800 rounded-sm'>
                                        <input type="text" placeholder='Nom...'/>
                                    </li>
                                    <li className='border-b-2 bg-zinc-800 rounded-sm'>
                                        <input type="text" placeholder='Prénom...' />
                                    </li>
                                </div>
                                <li className='border-b-2 bg-zinc-800 rounded-sm'>
                                    <input className='w-full' type="email" placeholder='Email...'/>
                                </li>
                                <li className='border-b-2 bg-zinc-800 rounded-sm'>
                                    <input className='w-full' type="text" placeholder='Objet...' />
                                </li>
                                <li className='border-b-2 bg-zinc-800 rounded-sm'>
                                    <textarea className='w-full h-25 resize-y' type="" placeholder='Message'/>
                                </li>
                                <button className='border-3 bg-zinc-400 text-black rounded-sm border-black hover:scale-101 hover:cursor-pointer hover:bg-amber-400'>Soumettre</button>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FromContact;