import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <section className='mb-16'>
            <h3 className='mb-5  text-xl text-[#D99904] font-[Inter] italic text-center relative z-10'>{subHeading}</h3>
            <div className="divider w-96  mx-auto"></div>
            <h1 className='text-4xl font-semibold text-center font-[Inter] relative z-10'>{heading}</h1>
            <div className="divider w-96  mx-auto "></div>
        </section>

    );
};

export default SectionTitle;