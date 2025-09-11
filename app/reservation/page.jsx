import React from 'react';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import FromContact from '@/src/components/compContact/FromContact';

const page = () => {
    return (
        <>
            <div className='bg-zinc-900'>
                <Navbar />
                <FromContact />
                <Footer />
            </div>
        </>
    );
};

export default page;