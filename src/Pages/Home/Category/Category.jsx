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
                >
                    <SwiperSlide>
                        <img className=' transform hover:scale-110 transition-transform' src={img1} alt="" />
                        <h3 className='text-css'>Salads</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className=' transform hover:scale-110 transition-transform' src={img2} alt="" />
                        <h3 className='text-css'>Pizzas</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className=' transform hover:scale-110 transition-transform' src={img3} alt="" />
                        <h3 className='text-css'>Soups</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className=' transform hover:scale-110 transition-transform' src={img4} alt="" />
                        <h3 className='text-css'>Desserts</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className=' transform hover:scale-110 transition-transform' src={img5} alt="" />
                        <h3 className='text-css'>Salads</h3>
                    </SwiperSlide>
                </Swiper>
            </section>

        </div>
    );
};

export default Category;