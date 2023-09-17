import React from 'react';
import './FeaturedItem.css'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'

const FeaturedItem = () => {
    return (
        // if we give bg-fixed in bg-img it will effect like parallex
        <div className='bg-img bg-fixed pt-16'> 
            <SectionTitle
                className=''
                subHeading={'---Check it out---'}
                heading={'FROM OUR MENU'}
            ></SectionTitle>
            <section className=' flex flex-col sm:flex-row justify-center items-center space-x-7 pb-24 px-5 sm:px-52'>
                <div>
                    <img className='relative z-10' src={featuredImg} alt="" />
                </div>
                <div className='space-y-4 mt-10 sm:mt-0'>
                    <h4 className='font-[Inter] font-semibold uppercase text-white relative z-10'>March 20, 2023</h4>
                    <h3 className='font-[Inter] font-semibold  uppercase text-white relative z-10'>WHERE CAN I GET SOME?</h3>
                    <p className='font-[Inter] font-normal leading-6 text-white relative z-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className='btn btn-outline text-white relative z-10 border-0 border-b-4 '>Read more</button>
                </div>
            </section>
        </div>
    );
};

export default FeaturedItem;