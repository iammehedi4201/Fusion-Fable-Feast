import React, { useContext } from 'react';
import './FoodCard.css'
import { AuthContext } from '../../Providers/AuthProvider';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
const FoodCard = ({ item }) => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation();
    const [,,,refetch] =useCart()
    const { name, recipe, image, price, _id } = item
    const foodQuantity = 1;
    const handleAddToCart = (item) => { 
        if (user && user.email) {
            const orderFood = {
                customarName: user.displayName,
                customarEmail: user.email,
                foodId: _id,
                foodName: name,
                foodImg: image,
                foodPrice: price,
                foodQuantity

            }
            fetch('http://localhost:5000/carts', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderFood)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();//this is call because of update cart item;
                        toast.success("Your order is added to cart")
                    }
                })
                .catch(error => console.error(error))
        }
        else {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Please First Login to order food !',
                confirmButtonText: 'Login',
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location }, replace: true });
                }
            })
        }
    }

    return (
        <div className="card w-full min-h-[55vh] bg-base-100 shadow-xl shadow-indigo-600 p-5">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <div class="absolute z-10 flex items-center justify-center w-14 h-14 p-5 text-center text-gray-100 bg-orange-600 rounded-full shadow-xl right-1 top-1 ">
                    <span class="relative text-base font-semibold text-gray-200 "> ${price}</span>
                </div>
                <h2 className="card-title font-bold font-[Inter] ">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline btn-primary border-0 border-b-4  ">ADD TO CART</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;