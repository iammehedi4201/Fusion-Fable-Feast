import React from 'react';
import './OrderTab.css'
import FoodCard from '../../../Shared/FoodCard/FoodCard';

const OrderTab = ({ item }) => {
    return (
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8'>
            {
                item.map(item => <FoodCard
                    key={item._id}
                    item={item}
                ></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;