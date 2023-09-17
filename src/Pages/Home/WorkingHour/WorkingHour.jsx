import React from 'react';
import './WorkingHour.css'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const WorkingHour = () => {
    return (
        <div className=' flex flex-col-reverse sm:flex-row items-center justify-between gap-10 bg-[#fdf1ed] p-10'>
            <section className='sm:w-1/2 w-full'>
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
            <section className='sm:w-1/2 w-full flex sm:justify-end justify-center '>
                 <img className='object-cover sm:w-8/12 h-auto' src="	https://qichen-react.vercel.app/assets/images/menu/menu-single-1.jpg" alt="" />
            </section>
        </div>
    );
};

export default WorkingHour;