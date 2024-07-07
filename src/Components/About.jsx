import React from 'react';
import munna from "../assets/munna1.png"
import { FiArrowUpRight } from 'react-icons/fi';
import { FaPlay } from 'react-icons/fa';
import "./about.css"
const About = () => {
    return (
        <div className='bg-[#1D1E1F] pt-12 pb-[110px]'>
            <div className='mt-12  flex gap-6 items-center relative max-w-6xl mx-auto'>
                <div className='lg:w-[40%] h-[500px] bg-gradient-to-b rounded-lg  from-primary to-black'>
                    <div className='bg-[#BFC0C4] rounded-lg w-[40%] h-[500px] absolute top-8 left-6'>
                        <img src={munna} className='ml-4 mt-10 ' alt="" />
                    </div>
                    <div className='absolute z-[1] rounded-lg top-8 left-6 h-[500px] inset-0 w-[40%] bg-gradient-to-b from-transparent to-[#000000] opacity-20'></div>
                </div>
                <div className='lg:w-[60%] py-4 pl-12'>
                    <p className='text-primary font-semibold pl-4 border-l-2 border-secondary'>ABOUT ME</p>
                    <h1 className='text-5xl font-semibold mt-6 '>Passionate Front-end Developer</h1>
                    <p className='mt-8 leading-relaxed'>
                        Embarking on my journey as a front-end developer, I believe that every innovative idea, regardless of its size, can create a meaningful impact. With a strong foundation in HTML5, CSS3, JavaScript, and React.js, I strive to build user-friendly, responsive web applications that stand out.
                    </p>
                    <div className='flex gap-12 mt-8'>
                        <div>
                            <h1 className='text-primary text-5xl font-semibold'>2+</h1>
                            <p className='text-primary2 mt-2'>Years of Experience</p>
                        </div>
                        <div>
                            <h1 className='text-primary text-5xl font-semibold'>12+</h1>
                            <p className='text-primary2 mt-2'>Project Completed</p>
                        </div>
                    </div>
                    <div className='flex gap-12 mt-8'>
                        <button className='flex items-center gap-2 text-white group uppercase px-6 py-4 rounded-3xl text-sm bg-primary '>Know More   <FiArrowUpRight className={`text-secondary text-xl group-hover:rotate-45 transition duration-500 `} /></button>
                        <div className="button-content ">
                            <button className="p-5 bg-primary  button-shadow  text-white rounded-full relative overflow-hidden">
                                <FaPlay className="text-xl" />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
       </div>
    );
};

export default About;