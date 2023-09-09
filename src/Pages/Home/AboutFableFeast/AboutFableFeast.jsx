import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const AboutFableFeast = () => {
    return (
        <div className='flex gap-7 '>
            <section className='w-1/2'>
                <SectionTitle
                    subHeading={"----ABOUT FUSION FABLE FEAST----"}
                    heading={"The Best Tasty & Yamee Food and Chief Based on Italiano"}
                ></SectionTitle>
                <p className='leading-7'>Sit amet consectetur adipiscing elitsue risus mauris quam neque adipiscing phasellus aenean ante orcirat scelerisque enim ut nulla vestibulum velvitae ut at elementum mauris, etiam ornare diame</p>
                <button className='btn btn-outline   relative z-10 border-0 border-b-4 my-6'>LEARN MORE </button>
            </section>
            <section className='w-1/2 flex gap-7'>
                <img className='rounded-lg transform hover:scale-110 transition-transform' src="https://qichen-react.vercel.app/assets/images/about/image-1.jpg" alt="" />

                <img className='rounded-lg  transform hover:scale-110 transition-transform' src="https://qichen-react.vercel.app/assets/images/about/image-2.jpg" alt="" />
            </section>
        </div>
    );
};

export default AboutFableFeast;