import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
const useCart = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const { isLoading, isError, refetch, data: cart = [], error } = useQuery({
        queryKey: ['carts', user?.email],
        // queryFn: async () => {
        //     const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
        //         method: "GET",
        //         headers: {
        //             authorization: `bearer ${localStorage.getItem("fable-access-token")}`
        //         }
        //     })
        //     if (!response.ok) {
        //         throw new Error('Network response was not ok')
        //     }

        //     return response.json();
        // },
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },

    })

    return [cart, isLoading, isError, refetch]
}

export default useCart;