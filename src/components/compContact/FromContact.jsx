"use client"

import React from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";

const ContactForm = () => {
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [object, setObject] = useState("select")
    const [message, setMessage] = useState("")
    const [modal, setModal] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleModal = () => {
        if(!name | !username | !email | !message) {
            setModal(false)
        } else {
            setModal(true)
        }
    }


    return (
        <section className="text-white px-6 py-12 max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-8">
                Formulaire de contact
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-zinc-800 rounded-sm border-b-2">
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Nom..."
                            className="w-full px-3 py-2 bg-transparent outline-none"
                            required
                        />
                    </div>
                    <div className="bg-zinc-800 rounded-sm border-b-2">
                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            type="text"
                            placeholder="Prénom..."
                            className="w-full px-3 py-2 bg-transparent outline-none"
                            required
                        />
                    </div>
                </div>
                <div className="bg-zinc-800 rounded-sm border-b-2">
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email..."
                        className="w-full px-3 py-2 bg-transparent outline-none"
                        required
                    />
                </div>
                <div className="bg-zinc-800 rounded-sm border-b-2">
                    <select name="object" className="w-full px-3 py-2 bg-transparent outline-none">
                        <option value="select" className="bg-zinc-800 text-white">Objet...</option>
                        <option value="rendezVous" id="1" className="bg-zinc-800 text-white">Prendre un rendez-vous</option>
                        <option value="renseignement" id="2" className="bg-zinc-800 text-white">Renseignement sur une prestation</option>
                    </select>
                </div>
                <div className="bg-zinc-800 rounded-sm border-b-2">
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Message..."
                        rows={5}
                        className="w-full px-3 py-2 bg-transparent outline-none resize-y"
                        required
                    />
                </div>

                <button
                    onClick={handleModal}
                    type="submit"
                    className="w-full py-3 rounded-sm border-2 border-black bg-zinc-400 text-black font-semibold transition-transform duration-200 hover:scale-101 hover:bg-amber-400 hover:cursor-pointer"
                >
                    Soumettre
                </button>
            </form>

            {modal && 
                createPortal(
                    <Modal 
                        closeModal={() => setModal(false)}
                        name={name}
                        username={username}
                        email={email}
                        message={message}
                    />, 
                    document.body
                )
            }
        </section>
    );
};

export default ContactForm;
