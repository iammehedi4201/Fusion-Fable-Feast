import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './Category.css'
import img1 from '../../../assets/Category/slide1.jpg'
import img2 from '../../../assets/Category/slide2.jpg'
import img3 from '../../../assets/Category/slide3.jpg'
import img4 from '../../../assets/Category/slide4.jpg'
import img5 from '../../../assets/Category/slide5.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <div className='relative w-full '>
            <SectionTitle
                subHeading={"---From 11:00am to 10:00pm---"}
                heading={"ORDER ONLINE"}
            ></SectionTitle>
            <section>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper my-12"
                    breakpoints={{
                        // Customize breakpoints for different screen sizes
                        320: {
                          slidesPerView: 1, // Change to 1 slide per view on small screens
                          spaceBetween: 10, // Adjust spacing as needed
                        },
                        768: {
                          slidesPerView: 2, // Change to 2 slides per view on medium screens
                          spaceBetween: 20, // Adjust spacing as needed
                        },
                        1024: {
                          slidesPerView: 4, // Back to 4 slides per view on larger screens
                          spaceBetween: 30, // Adjust spacing as needed
                        },
                      }}
                >
                    <SwiperSlide className=''>
                        <div class="relative grid h-[20rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                            <div class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent  bg-cover bg-clip-border bg-center text-gray-700 shadow-none" style={{ backgroundImage: `url(${img1})` }}>
                                <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
                            </div>
                            <div class="relative p-6 py-14 px-6 md:px-12">
                                <h2 class="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                                    SALADS
                                </h2>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="relative grid h-[20rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                            <div class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent  bg-cover bg-clip-border bg-center text-gray-700 shadow-none" style={{ backgroundImage: `url(${img2})` }}>
                                <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
                            </div>
                            <div class="relative p-6 py-14 px-6 md:px-12">
                                <h2 class="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                                    SALADS
                                </h2>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="relative grid h-[20rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                            <div class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent  bg-cover bg-clip-border bg-center text-gray-700 shadow-none" style={{ backgroundImage: `url(${img3})` }}>
                                <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
                            </div>
                            <div class="relative p-6 py-14 px-6 md:px-12">
                                <h2 class="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                                    PRIZZA
                                </h2>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="relative grid h-[20rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                            <div class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent  bg-cover bg-clip-border bg-center text-gray-700 shadow-none" style={{ backgroundImage: `url(${img4})` }}>
                                <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
                            </div>
                            <div class="relative p-6 py-14 px-6 md:px-12">
                                <h2 class="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                                    SALADS
                                </h2>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="relative grid h-[20rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                            <div class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent  bg-cover bg-clip-border bg-center text-gray-700 shadow-none" style={{ backgroundImage: `url(${img5})` }}>
                                <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
                            </div>
                            <div class="relative p-6 py-14 px-6 md:px-12">
                                <h2 class="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                                    SALADS
                                </h2>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>

        </div>
    );
};

export default Category;