import React from 'react';
import userUsers from '../../../../Hooks/useUsers';
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';
import AllUserRow from '../AllUsersRow/AllUserRow';
import { Helmet } from 'react-helmet-async';

const Alluser = () => {
    //Users load from database 
    const [users, isLoading, refetch] = userUsers();

    if (isLoading) {
        return <div className='w-full min-h-screen flex justify-center items-center'>
            <span className="loading loading-infinity loading-lg"></span>
        </div>
    }

    return (
        <div>
            <Helmet>
                <title>Fusion Fable Feast | All Users </title>
            </Helmet>
            <SectionTitle
                subHeading={'---How many??---'}
                heading={'MANAGE ALL USERS'}
            ></SectionTitle>

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg ">
                <div class="pb-4 bg-white ">
                    <label for="table-search" class="sr-only">Search</label>
                    <div class="relative mt-1 p-1">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="text" id="table-search" class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
                    </div>
                </div>
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-sm text-gray-100 uppercase bg-[#D1A054]  ">
                        <tr>
                            <th scope="col" class="p-4">

                            </th>
                            <th scope="col" class="px-6 py-3">
                                name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                email
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Role
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, index) => <AllUserRow
                                key={user._id}
                                user={user}
                                userCount={index + 1}
                            ></AllUserRow>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Alluser;