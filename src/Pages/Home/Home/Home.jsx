import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import FeaturedItem from '../FeaturedItem/FeaturedItem';
import Reviews from '../../Reviews/Reviews';
import AboutFableFeast from '../AboutFableFeast/AboutFableFeast';
import Chefs from '../Chefs/Chefs';
import WorkingHour from '../WorkingHour/WorkingHour';
import BookTable from '../../BookTable/BookTable';

const Home = () => {
    return (
        <div className='space-y-20'>
            <Banner></Banner>
            <Category></Category>
            <AboutFableFeast></AboutFableFeast>
            <PopularMenu></PopularMenu>
            <Chefs></Chefs>
            <WorkingHour></WorkingHour>
            <FeaturedItem></FeaturedItem>
            <Reviews></Reviews>
            <BookTable></BookTable>
        </div>
    );
};

export default Home;