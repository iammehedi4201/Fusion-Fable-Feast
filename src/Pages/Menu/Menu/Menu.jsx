import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Menu.css'
import useMenu from '../../../Hooks/useMenu';
import MenuCategory from '../../../Components/MenuCategory/MenuCategory';
import manuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import Cover from '../../../Shared/Cover/Cover';



const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === "dessert")
    const soup = menu.filter(item => item.category === "soup")
    const pizza = menu.filter(item => item.category === "pizza")
    const salad = menu.filter(item => item.category === "salad")
    const drinks = menu.filter(item => item.category === "drinks")
    const offered = menu.filter(item => item.category === "offered")

    return (
        <div>
            <Helmet>
                <title>Fuion Fable Feast | Menu</title>
            </Helmet>
            <Cover
                text={"Would you like to try a dish?"}
                title={'our menu'}
                img={manuImg}
            >
            </Cover>

            {/* offerd Items  */}
            <section className='bg-[#fdf1ed] '>
                <MenuCategory
                    items={offered}
                    subHeading={"---Don't miss---"}
                    heading={"TODAY'S OFFER"}
                ></MenuCategory>
            </section>

            {/* Desserts items  */}
            <section className='bg-[#fdf1ed]'>
                <MenuCategory
                    items={dessert}
                    img={dessertImg}
                    title={'DESSERTS'}
                    text={" Desserts are sweet and indulgent treats typically served at the end of a meal or as standalone delights. They come in a wide variety of flavors, textures, and forms, catering to diverse tastes and preferences."}

                >
                </MenuCategory>
            </section>

             {/* Desserts items  */}

             <section className='bg-[#fdf1ed]'>
                <MenuCategory
                    items={soup}
                    img={soupImg}
                    title={'SOUPS'}
                    text={" Indulge in the comforting embrace of our soups at Fusion Fable Feast. From classic chicken noodle to exotic Thai coconut, our expertly crafted soups warm your soul with every spoonful. Each bowl is a celebration of flavors, made from the finest ingredients, and served with a dash of love.."}

                >
                </MenuCategory>
            </section>

        </div>
    );
};

export default Menu;