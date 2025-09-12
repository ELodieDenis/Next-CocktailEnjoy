"use client"

import React from 'react';
import { useState, useEffect } from 'react';

const Modal = ({closeModal, name, username, email, message}) => {
    const [save, setSave] = useState(false)

    const handleSave = () => {
        setSave(true)
        alert("Renseignements enregistrés")
        closeModal()
    }

    useEffect(() => {
        localStorage.setItem("name", JSON.stringify(save))
    }, [save])

    return (
        <>
            <div
                onClick={closeModal}
                className='fixed inset-0 bg-slate-800/75'>
            </div>
            <div className='fixed z-10 top-1/3 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-slate-300 text-slate-900 p-10 rounded'>
                <div className='flex flex-col gap-4'>
                    <h2 className='font-semibold text-2xl'>Renseignements</h2>
                    <div className='flex flex-col'>
                        <p>Prénom : <strong>{name}</strong></p>
                        <p>Nom : <strong>{username}</strong></p>
                        <p>Email : <strong>{email}</strong></p>
                        <p>Message : <strong>{message}</strong></p>
                    </div>
                    <button onClick={handleSave} className='rounded-3xl h-10 border border-amber-400 bg-amber-400 hover:bg-zinc-800 hover:text-amber-400 hover:cursor-pointer'>Enregistrer</button>
                </div>
                <button onClick={closeModal} className='absolute top-1 right-1 bg-red-800 w-7 h-7 text-slate-100 rounded'>x</button>
            </div>
        </>
    );
};

export default Modal;