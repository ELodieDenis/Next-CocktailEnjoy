import React from 'react';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import Contact from '@/src/components/compContact/Contact';

const page = () => {
    return (
        <>
            <div className='bg-zinc-900'>
                <Navbar />
                <Contact />
                <Footer />
            </div>
        </>
    );
};

export default page;