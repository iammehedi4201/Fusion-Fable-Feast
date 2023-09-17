import React from 'react';
import './Cover.css'
import { Parallax } from 'react-parallax';

const Cover = ({ img, title, text }) => {


    return (
        <div>
            <Parallax
                blur={5} bgImage={img} bgImageAlt="the Menu" strength={300}
            >
                <div className="hero min-h-[70vh] " >
                    <div className="hero-overlay"></div>
                    <div className="hero-content sm:text-center text-neutral-content">
                        <div className="bg-effect">
                            <h1 className="mb-5 text-5xl font-bold  text-orange-600 font-[Cinzel] underline underline-offset-4 uppercase ">{title}</h1>
                            <p className="mb-5 font-[Cinzel] font-bold text-lg">{text}</p>

                        </div>
                    </div>
                </div>

            </Parallax>

        </div>
    );
};

export default Cover;