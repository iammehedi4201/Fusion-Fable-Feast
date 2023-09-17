import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import useCart from '../../../../Hooks/useCart';
import Swal from 'sweetalert2';

const CartRow = ({ item }) => {
    const { _id, foodName, foodImg, foodPrice, foodQuantity } = item
    const [Quantity, setQuantiy] = useState(foodQuantity)
    const [, , , refetch] = useCart();

    useEffect(() => {
        fetch(`http://localhost:5000/carts/${_id}`, {
            method: "PATCH",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ Quantity })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                }
            })
            .catch(error => console.error(error))
    }, [Quantity,_id])

    //handle Delete
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Item has been deleted.',
                                'success'
                            )

                            refetch();
                        }
                    })
                    .catch(error => console.error(error))
            }
        })
    }


    return (
        <tr className="bg-white  hover:bg-stone-400 ">
            <td className="w-32 p-4">
                <img src={foodImg} alt="Apple Watch" />
            </td>
            <td className="px-6 py-4 font-bold text-gray-900 ">
                {foodName}
            </td>
            <td className="px-6 py-4">
                <div className="flex items-center space-x-3">
                    <button onClick={() => {
                        if (Quantity > 1) {
                            setQuantiy(Quantity - 1)

                        }
                    }} className="inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                        <span className="sr-only">Quantity button</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                        </svg>
                    </button>
                    <div>
                        <input value={Quantity} type="number" id="first_product" className="text-center bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required readOnly />
                    </div>
                    <button onClick={() => setQuantiy(Quantity + 1)} className="inline-flex items-center justify-center h-6 w-6 p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                        <span className="sr-only ">Quantity button</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                        </svg>
                    </button>
                </div>
            </td>
            <td className="px-6 py-4 font-bold text-gray-900 ">
                ${foodPrice * Quantity}
            </td>
            <td className="px-6 py-4">
                <button onClick={() => handleDelete(_id)} className="btn font-medium text-white bg-red-700 hover:bg-red-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                    </svg>
                </button>
            </td>
        </tr>
    );
};

export default CartRow;