import React, { useState } from 'react';
import { FaCss3, FaHtml5 } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import "./banner.css"
// images
import html from '../assets/file-type-html.226x256.png'
import css from '../assets/file-type-css.226x256.png'
import js from '../assets/javascript-js.256x256.png'
import tailwind from '../assets/tailwind-css.256x154.png'
import react from '../assets/react.256x228.png'
import mongodb from '../assets/mongodb-original.231x512.png'
import nodejs from '../assets/file-type-node.227x256.png'
import munna from '../assets/munna.png'

import { motion } from 'framer-motion';
import resume from "../../public/Mk-Munna-Resume.pdf"
import { FiArrowUpRight } from 'react-icons/fi';

const Banner = () => {

    const navigate = useNavigate();
    const [hovered, setHovered] = useState(false);

    const handleHover = () => {
        setHovered(!hovered);
    };

    return (
        <div className='py-20 flex gap-16'>
            <div className='w-full'>
                <h1 className='text-5xl  font-semibold'>Hi,<span className='tata'>👋</span> This is <span className='text-primary'>Munna</span>, a Front-End Developer</h1>
                <p className='mt-6 text-lg leading-relaxed'> My goal is to bring creative ideas to life through clean, efficient, and scalable code.</p>
                <pre className="p-4 rounded-lg mt-8">
                    <code className="text-teal-400">
                        <span className="text-[#C792EA]">&nbsp; <span className='text-Description font-bold'>1</span>  const</span> <span className='text-primary2'>skills</span><span className='text-yellow-400'> = [</span><br />
                        <div className='bg-[#12151d] border-l-4 border-primary '>
                            <p className='flex items-center gap-1'>&nbsp;<span className='text-Description font-bold'>2 </span> &nbsp;'<img className='w-3' src={html} alt="" />Html5'<br /></p>
                            <p className='flex items-center gap-1'>&nbsp;<span className='text-Description font-bold'>3 </span> &nbsp;'<img className='w-3' src={css} alt="" />Css3'<br /></p>
                            <p className='flex items-center gap-1'>&nbsp;<span className='text-Description font-bold'>4 </span> &nbsp;'<img className='w-3' src={tailwind} alt="" />Tailwind Css'<br /></p>
                            <p className='flex items-center gap-1'>&nbsp;<span className='text-Description font-bold'>5 </span> &nbsp;'<img className='w-3' src={js} alt="" />JavaScript'<br /></p>
                            <p className='flex items-center gap-1'>&nbsp;<span className='text-Description font-bold'>6 </span> &nbsp;'<img className='w-3' src={nodejs} alt="" />Node Js'<br /></p>
                            <p className='flex items-center gap-1'>&nbsp;<span className='text-Description font-bold'>7 </span> &nbsp;'<img className='w-2' src={mongodb} alt="" />MongoDB'<br /></p>
                        </div>
                        <span className='text-yellow-400'>&nbsp;&nbsp;<span className='text-Description font-bold'>7  </span>]</span><span className='text-primary2'>;</span><br />
                        <span className="text-[#C792EA]">&nbsp;&nbsp;<span className='text-Description font-bold'>8 </span> if</span> <span className='text-yellow-400'>(</span><span className='text-primary2'>have_a_project</span><span className='text-yellow-400'>)</span> <span className='text-[#C792EA]'>navigate</span><span className='text-yellow-400'>(</span>'/contact'<span className='text-yellow-400'>)</span>
                    </code>
                </pre>
                <div>
                    <div className='flex gap-6 items-center mt-6'>
                        <button className='text-white border uppercase px-6 py-3  rounded-3xl text-sm border-primary'>
                            <a className='flex items-center ' href={resume} download={"resume"} >
                                <motion.div
                                    initial={{ opacity: 1, y: 5, x: 0 }}
                                    animate={{ opacity: 1, y: 0, x: 0 }}
                                    transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                                    className=''>
                                    <i className="bi bi-cloud-download mr-2"></i>
                                </motion.div>
                                Download Resume
                            </a></button>
                        <button
                            className='text-teal-400 underline flex gap-2 items-center uppercase  '
                            onClick={() => navigate('#contact')}
                            onMouseEnter={handleHover}
                            onMouseLeave={handleHover}
                        >
                            Contact Now
                            <FiArrowUpRight className={`text-primary2 text-xl transition duration-500 ${hovered ? 'rotate-45 ' : 'rotate-0'}`} />
                        </button>

                    </div>
                </div>
            </div>
            <div className='w-full relative'>
                <div className='bg-[#203556]  box-shadow  rounded-full size-[480px] mt-6 relative'>
                    <div className='absolute  z-[1] inset-0 size-[480px] rounded-full bg-gradient-to-b from-transparent to-[#000000] opacity-70 '></div>
                    <img className='w-[430px] rounded-bl-[210px] rounded-br-[200px] rotate-[3deg] absolute right-[30px] bottom-[3px]' src={munna} alt="" />
                </div>
            </div>
        </div>
    );
};
export default Banner;