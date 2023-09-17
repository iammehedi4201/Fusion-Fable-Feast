import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';
import useCart from '../../../../Hooks/useCart';
import CartRow from '../CartRow/CartRow';

const Mycart = () => {
    const [cart, isLoading, isError, refetch] = useCart();

    if (isLoading) {
        return <div className='w-full min-h-screen flex justify-center items-center'>
            <span className="loading loading-infinity loading-lg"></span>
        </div>
    }

    const totalPrice = cart?.reduce((accumulator, currentItem) => {
        return accumulator + (currentItem.foodPrice * currentItem.foodQuantity);
    }, 0); // Provide an initial value of 0

    return (
        <div>
            <Helmet>
                <title>Fusion Fable Feast | My cart </title>
            </Helmet>
            <SectionTitle
                subHeading={'---My Cart---'}
                heading={"WANNA ADD MORE"}
            ></SectionTitle>
            <section>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
                    <section className='lg:col-span-3'>

                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-sm text-gray-100 uppercase  bg-[#D1A054]">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            <span className="sr-only  font-semibold">Image</span>
                                        </th>
                                        <th scope="col" className="px-6 py-3  font-semibold">
                                            Item
                                        </th>
                                        <th scope="col" className="px-20 py-3  font-semibold">
                                            Qty
                                        </th>
                                        <th scope="col" className="px-6 py-3  font-semibold">
                                            Price
                                        </th>
                                        <th scope="col" className="px-6 py-3  font-semibold">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cart.map(item => <CartRow
                                            key={item._id}
                                            item={item}
                                        ></CartRow>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </section>
                    <section className='bg-[#D1A054] p-5 rounded-lg'>
                        <div>
                            <h2 class="mb-6 text-3xl font-bold text-white">Cart totals</h2>
                            <div class="flex items-center justify-between px-10 py-4 mb-3 font-medium leading-8 bg-gray-100 bg-opacity-50 border dark:text-gray-400 dark:bg-gray-800 dark:border-gray-800 rounded-xl">
                                <span>Subtotal</span>
                                <span class="flex items-center text-xl">
                                    <span class="mr-2 text-base">$</span>
                                    <span>{totalPrice}</span>
                                </span>
                            </div>
                            <div class="flex items-center justify-between px-10 py-4 mb-3 font-medium leading-8 bg-gray-100 bg-opacity-50 border dark:text-gray-400 dark:bg-gray-800 dark:border-gray-800 rounded-xl">
                                <span>Shipping</span>
                                <span class="flex items-center text-xl">
                                    <span class="mr-2 text-base">$</span>
                                    <span>100</span>
                                </span>
                            </div>
                            <div class="flex items-center justify-between px-10 py-4 mb-6 font-medium leading-8 bg-gray-100 border dark:text-gray-400 dark:bg-gray-800 dark:border-gray-800 rounded-xl">
                                <span>Total</span>
                                <span class="flex items-center text-xl text-blue-500 dark:text-blue-400">
                                    <span class="mr-2 text-base">$</span>
                                    <span>{totalPrice}</span>
                                </span>
                            </div>
                            <a class="btn  btn-neutral  border-b-4  rounded-md" href="#">Make Payment</a>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    );
};

export default Mycart;