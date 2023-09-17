import React from 'react';
import MenuItems from '../../Shared/MenuItems/MenuItems';
import Cover from '../../Shared/Cover/Cover';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, img, title, text, subHeading, heading }) => {
    return (
        <div className='space-y-6 '>
            {
                title && <Cover
                    img={img}
                    title={title}
                    text={text}
                ></Cover>
            }

            {
                subHeading && <SectionTitle
                    subHeading={subHeading}
                    heading={heading}
                ></SectionTitle>
            }
            <div className='grid sm:grid-cols-2 gap-7 px-12 py-10'>
                {
                    items.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>

            <div className='w-full flex justify-center py-10'>
                <Link to={`/order/${title}`} className='btn btn-outline text-black  border-0 border-b-4 uppercase'>order your favourit food</Link >
            </div>

        </div>
    );
};

export default MenuCategory;