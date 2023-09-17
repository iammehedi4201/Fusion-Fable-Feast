import React from 'react';
import './MenuItems.css'

const MenuItems = ({ item }) => {

    const { name, recipe, image, price } = item

    return (
        <section className='flex space-x-4 p-2 relative z-10'>
            <img className='img-style w-20 h-20 object-cover text-black' src={image} alt="" />
            <div>
                <h1 className='uppercase font-[Cinzel]  font-medium text-xl'>{name}------------------</h1>
                <p className=' font-[Inter] leading-8 font-normal' >{recipe}</p>
            </div>
            <h4 className='text-yellow-600 font-[Inter] font-semibold'>${price}</h4>
        </section>
    );
};

export default MenuItems;