
import React from 'react';
// images
import html from '../assets/file-type-html.226x256.png'
import css from '../assets/file-type-css.226x256.png'
import js from '../assets/javascript-js.256x256.png'
import tailwind from '../assets/tailwind-css.256x154.png'
import react from '../assets/react.256x228.png'
import mongodb from '../assets/mongodb-original.231x512.png'
import nodejs from '../assets/file-type-node.227x256.png'
import { FaPeopleGroup } from 'react-icons/fa6';
import { GiTeamUpgrade } from 'react-icons/gi';
import { IoMdDoneAll } from 'react-icons/io';

const Skills = () => {
    return (
        <div id='skill' className='py-10'>
            <p className='text-xl text-center font-semibold'>Skills</p>
            <div className='mt-4'>
                <h3 className='text-6xl text-center font-semibold'>Soft Skills</h3>
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="overflow-hidden bg-[#1D1E1F]  rounded shadow">
                            <div className="p-8">
                                <div className="flex items-center">
                                    <span className='bg-primary p-3 rounded-full'><FaPeopleGroup className='text-3xl text-white' /></span>
                                    <div className="ml-5 mr-auto">
                                        <p className="text-xl font-semibold text-primary2">Communication</p>
                                        <p className="mt-px text-sm ">Essential Skill</p>
                                    </div>
                                </div>
                                <p className="text-base leading-relaxed  mt-7">Effectively convey and receive messages in various formats, ensuring clarity and understanding.</p>
                            </div>
                        </div>

                        <div className="overflow-hidden bg-[#1D1E1F]  rounded shadow">
                            <div className="p-8">
                                <div className="flex items-center">
                                    <span className='bg-primary p-3 rounded-full'><GiTeamUpgrade className='text-3xl text-white' /></span>
                                    
                                    <div className="ml-5 mr-auto">
                                        <p className="text-xl font-semibold text-primary2">Teamwork</p>
                                        <p className="mt-px text-sm ">Collaborative Effort</p>
                                    </div>
                                </div>
                                <p className="text-base leading-relaxed  mt-7">Work harmoniously with others towards common goals, fostering a supportive and efficient environment.</p>
                            </div>
                        </div>

                        <div className="overflow-hidden bg-[#1D1E1F]  rounded shadow">
                            <div className="p-8">
                                <div className="flex items-center">
                                    <span className='bg-primary p-3 rounded-full'><IoMdDoneAll className='text-3xl text-white' /></span>
                                    <div className="ml-5 mr-auto">
                                        <p className="text-xl font-semibold text-primary2">Problem-solving</p>
                                        <p className="mt-px text-sm ">Analytical Skill</p>
                                    </div>
                                </div>
                                <p className="text-base leading-relaxed  mt-7">Identify, analyze, and resolve issues efficiently, employing innovative solutions and critical thinking.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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

export default Skills;
