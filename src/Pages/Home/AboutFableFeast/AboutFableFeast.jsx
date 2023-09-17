import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const AboutFableFeast = () => {
    return (
        <div>
            <SectionTitle
                subHeading={"----ABOUT FUSION FABLE FEAST----"}
                heading={"The Best Tasty & Yamee Food and Chief Based on Italiano"}
            ></SectionTitle>
            <div className=' flex flex-col-reverse sm:flex-row gap-7  '>
                <section className='sm:w-1/2 w-full'>
                    <h3 className='mb-5  text-xl text-[#D99904] font-[Inter] italic  '>The Best Tasty & Yamee Food and Chief Based on Italiano</h3>
                    <p className='leading-7'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quae reprehenderit amet iusto rerum sint nemo, accusamus alias quisquam ut at aut harum perspiciatis tenetur dolores! Aliquid velit eaque corporis quia architecto quasi error, maxime ea? Minus odio fugiat, a blanditiis magni est, assumenda inventore veniam debitis voluptas accusantium quis ad modi voluptatibus expedita vero? Sunt ipsam, accusamus ducimus dignissimos laboriosam qui illum possimus ex? Ipsam minus perspiciatis rerum minima aperiam sunt earum, at numquam quisquam deleniti doloribus magnam delectus eum laborum? Fugit sit aliquam vel culpa quos magnam. Odit ducimus architecto possimus quisquam consequatur quo eveniet? Est, laboriosam itaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vel quam eos reiciendis dolore architecto, mollitia odio eum dolor fugiat laudantium neque obcaecati sint placeat voluptatem inventore sit! Quisquam, veritatis.</p>
                    <button className='btn btn-outline   relative z-10 border-0 border-b-4 my-6'>LEARN MORE </button>
                </section>
                <section className='sm:w-1/2 flex flex-col  sm:flex-row  gap-7'>
                    <img className='rounded-lg transform hover:scale-110 transition-transform ' src="https://qichen-react.vercel.app/assets/images/about/image-1.jpg" alt="" />

                    <img className='rounded-lg  transform hover:scale-110 transition-transform' src="https://qichen-react.vercel.app/assets/images/about/image-2.jpg" alt="" />
                </section>
            </div>
        </div>

    );
};

export default AboutFableFeast;