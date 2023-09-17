import React from 'react';
import './PopularMenu.css'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItems from '../../../Shared/MenuItems/MenuItems';
import useMenu from '../../../Hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popularItem = menu.filter(item => item.category === "popular")

    return (
        <div className=' p-16'>
            <SectionTitle
                subHeading={"---Popular Items---"}
                heading={"FROM OUR MENU"}
            ></SectionTitle>
            <section className='grid sm:grid-cols-2 gap-7'>
                {
                    popularItem.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </section>
            <div className='w-full flex justify-center mt-4'>
                <button className='btn btn-outline text-black  border-0 border-b-4 '>VIEW FULL MENU</button>
            </div>
        </div>
    );
};

export default PopularMenu;