import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './Reviews.css'
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
            .catch(error => console.error(error))
    }, [])


    return (
        <div className='min-h-[80vh]  bg-slate-200 sm:px-16  sm:py-10 '>
            <SectionTitle
                subHeading={"---What Our Clients Say---"}
                heading={"TESTIMONIALS"}
            >
            </SectionTitle>
            <section className='relative'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                            className='p-5'
                        >
                            {/* <div className='space-y-5 '>
                                
                                <p className='text-center leading-7'>{review.details}</p>
                                <h3 className='text-2xl text-orange-600 text-center'>{review.name}</h3>
                            </div> */}

                            {/* --------------------- */}

                            <div class="relative p-10 mb-16  bg-white border border-gray-100 shadow dark:border-gray-700  dark:bg-gray-700 sm:w-4/5 mx-auto">
                                <div class="absolute top-0 left-6">
                                    <svg height="24" viewBox="0 0 24 24" width="24"
                                        class="w-10 h-10 fill-gray-300 dark:fill-gray-500 " xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M3.691 6.292C5.094 4.771 7.217 4 10 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 6.925 10H10a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2H3a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789zM20 20h-6a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789C16.094 4.771 18.217 4 21 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 17.925 10H21a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2z" />
                                    </svg>
                                </div>
                                <div class="flex justify-center mb-6">
                                    <Rating
                                        style={{ maxWidth: 120 }}
                                        value={review.rating}
                                        readOnly
                                        className='mx-auto'
                                    />
                                </div>
                                <p class="mb-6 text-base text-gray-600 dark:text-gray-400">
                                    {review.details}
                                </p>
                                <p class="mb-6 text-sm italic dark:text-orange-400">- {review.name}</p>
                                <div class="absolute bottom-0 flex self-start -mb-10 ">
                                    <img src="https://i.postimg.cc/SKFFcpqx/pexels-jonas-mohamadi-1416736.jpg"
                                        class="object-cover w-20 h-20 border-4 rounded-full shadow-lg border-gray-50 dark:border-gray-500" />
                                </div>
                                <div class="absolute bottom-0 right-6">
                                    <svg height="24" viewBox="0 0 24 24" width="24"
                                        class="w-10 h-10 fill-gray-300 dark:fill-gray-500 " xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z" />
                                    </svg>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </section>
        </div>
    );
};

export default Reviews;