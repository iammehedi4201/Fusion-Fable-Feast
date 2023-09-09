import React, { useEffect, useState } from 'react';
import './PopularMenu.css'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItems from '../../../Shared/MenuItems/MenuItems';

const PopularMenu = () => {
    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setMenu(popularItems)
            })
            .catch(error => console.error(error))
    }, [])

    console.log("menu is :-", menu);

    return (
        <div className='popular-bg p-16'>
            <SectionTitle
                subHeading={"---Popular Items---"}
                heading={"FROM OUR MENU"}
            ></SectionTitle>

            <section className='grid sm:grid-cols-2 gap-7'>
                {
                    menu.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </section>


        </div>
    );
};

export default PopularMenu;