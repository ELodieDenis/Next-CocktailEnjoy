import React from 'react';
import ContactForm from './FromContact';
import FromOpinion from './FromOpinion';
import ModifOpinion from './ModifOpinion';

const Contact = () => {
    return (
        <>
            <div>
                <ContactForm />
                <ModifOpinion />
                <FromOpinion />
            </div>
        </>
    );
};

export default Contact;