import React from 'react';
import './WorkingHour.css'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const WorkingHour = () => {
    return (
        <div className='flex items-center justify-between gap-10 bg-[#fdf1ed] p-10'>
            <section className='w-1/2'>
                <SectionTitle
                    subHeading={"WORKING HOUR"}
                    heading={'Enjoy Our Foods From 6 Days In a Week'}
                ></SectionTitle>

                <div className='my-3'>
                    <h4 className='font-blod text-2xl schdule-title '>
                        Monday - Friday
                        <span>-------</span>
                        <span>09am-6pm</span>
                    </h4>
                </div>
                <div className='my-3'>
                    <h4 className='font-blod text-2xl schdule-title'>
                        Saturday
                        <span>-------</span>
                        <span>08am-7pm</span>
                    </h4>
                </div>

                <div className='my-3'>
                    <h4 className='font-blod text-2xl schdule-title'>
                        Sunday
                        <span>-------</span>
                        <span>Closed
                        </span>
                    </h4>
                </div>

            </section>
            <section className='w-1/2 flex justify-end '>
                 <img className='object-cover w-8/12 h-auto' src="	https://qichen-react.vercel.app/assets/images/menu/menu-single-1.jpg" alt="" />
            </section>
        </div>
    );
};

export default WorkingHour;