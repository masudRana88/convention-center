import React from 'react';
import CardContainer from '../CardContainer/CardContainer';

const PackageSection = () => {
    return (
        <section className='w-full mt-16 md:mt-20' id='package'>
            <h3 className='mb-20 text-3xl font-bold text-center md:text-4xl'>Our package</h3>
            <CardContainer/>
        </section>
    );
};

export default PackageSection;