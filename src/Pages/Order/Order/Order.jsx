import React, { useState } from 'react';
import './Order.css';
import orderCover from '../../../assets/shop/banner2.jpg';
import Cover from '../../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';
import FoodCard from '../../../Shared/FoodCard/FoodCard';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactPaginate from 'react-paginate';

const ITEMS_PER_PAGE = 3; // Adjust the number of items per page as needed

const Order = () => {
    const categories = ['SALAD', 'PIZZA', 'SOUPS', 'DESSERTS', 'DRINKS'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const [currentPage, setCurrentPage] = useState(0);

    // Filter menu items based on category
    const categoryItems = {
        SALAD: menu.filter(item => item.category === "salad"),
        PIZZA: menu.filter(item => item.category === "pizza"),
        SOUPS: menu.filter(item => item.category === "soup"),
        DESSERTS: menu.filter(item => item.category === "dessert"),
        DRINKS: menu.filter(item => item.category === "drinks"),
    };

    // Calculate the total number of pages for the current tab
    const pageCount = Math.ceil(categoryItems[categories[tabIndex]].length / ITEMS_PER_PAGE);

    // Get the items to display for the current page
    const displayedItems = categoryItems[categories[tabIndex]].slice(
        currentPage * ITEMS_PER_PAGE,
        (currentPage + 1) * ITEMS_PER_PAGE
    );

    // Handle page change
    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    return (
        <div className='space-y-10'>
            <Helmet>
                <title>Fusinon Fable Feast | Order Food</title>
            </Helmet>
            <Cover
                img={orderCover}
                title={"our Eatery"}
                text={"Fusion Fable Feast: Where Global Flavors Come Together. Join us for an enchanting culinary journey that blends diverse tastes and traditions into a memorable dining experience. Located in the heart of Dhaka, we're your destination for adventurous palates."}
            ></Cover>
            <section>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className='flex flex-wrap justify-center mb-6'>
                        {categories.map((cat, index) => (
                            <Tab key={index}>{cat}</Tab>
                        ))}
                    </TabList>
                    {categories.map((cat, index) => (
                        <TabPanel key={index}>
                            <OrderTab item={displayedItems}></OrderTab>
                            {pageCount > 1 && (
                                <ReactPaginate
                                    previousLabel={'previous'}
                                    nextLabel={'next'}
                                    breakLabel={'...'}
                                    pageCount={pageCount}
                                    onPageChange={handlePageClick}
                                    containerClassName={'pagination flex space-x-2 justify-center mt-4'}
                                    pageClassName={'rounded-full border hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out px-4 py-2 border-blue-500'}
                                    activeClassName={'bg-blue-500 text-white'}
                                    previousClassName={'rounded-full border hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out px-4 py-2 border-blue-500'}
                                    nextClassName={'rounded-full border hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out px-4 py-2 border-blue-500'}
                                    breakClassName={'rounded-full border px-4 py-2 border-blue-500'}
                                    pageRangeDisplayed={3} // Number of pages displayed in the center
                                    marginPagesDisplayed={2} // Number of pages displayed at the beginning and end
                                />
                            )}
                        </TabPanel>
                    ))}
                </Tabs>
            </section>
        </div>
    );
};

export default Order;
