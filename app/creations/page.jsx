import React from 'react';
import Navbar from '@/src/components/Navbar';
import ArrayCreations from '@/src/components/compCreations/ArrayCreations';

const page = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className='bg-zinc-900 text-white'>
                <ArrayCreations />
            </div>
        </>
    );
};

export default page;