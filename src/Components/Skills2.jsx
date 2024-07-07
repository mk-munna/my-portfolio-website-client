import React from 'react';
// images
import html from '../assets/file-type-html.226x256.png'
import css from '../assets/file-type-css.226x256.png'
import js from '../assets/javascript-js.256x256.png'
import tailwind from '../assets/tailwind-css.256x154.png'
import react from '../assets/react.256x228.png'
import mongodb from '../assets/mongodb-original.231x512.png'
import nodejs from '../assets/file-type-node.227x256.png'
const Skills2 = () => {
    return (
        <div>
            <div className='mt-12'>
                <h3 className='text-6xl text-center font-semibold'>Technical Skills</h3>
                <div className='flex space-x-4 justify-center my-10'>
                    <img src={html} className='w-[60px]' alt="" />
                    <img src={css} className='w-[60px]' alt="" />
                    <img src={tailwind} className='w-[80px]' alt="" />
                    <img src={js} className='w-[70px]' alt="" />
                    <img src={react} className='w-[80px]' alt="" />
                    <img src={nodejs} className='w-[60px]' alt="" />
                    <img src={mongodb} className='w-[25px]' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Skills2;