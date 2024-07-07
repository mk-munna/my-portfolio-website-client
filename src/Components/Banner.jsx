import React, { useState } from 'react';
import { FaCss3, FaEnvelope, FaGithub, FaHtml5 } from 'react-icons/fa';
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
import munna1 from '../assets/munna1.png'
import shape from '../assets/shape.png'

import { easeInOut, motion } from 'framer-motion';
import resume from "../../public/Mk-Munna-Resume.pdf"
import { FiArrowUpRight } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaLinkedin, FaBehance } from 'react-icons/fa';

const Banner = () => {

    const navigate = useNavigate();
    const [hovered, setHovered] = useState(false);

    const handleHover = () => {
        setHovered(!hovered);
    };

    return (
        <div className='py-20 flex gap-16 max-w-6xl mx-auto'>
            
            <div className='w-full relative'>
                <h1 className='text-5xl font-semibold'>Hi,<span className='tata'>👋</span> This is <span className='text-primary'>Munna</span>, a Front-End Developer</h1>
                <p className='mt-6 text-lg leading-relaxed'> My goal is to bring creative ideas to life through clean, efficient, and scalable code.</p>
                <pre className="p-4 rounded-lg mt-8  ">
                    <code className="text-teal-400 ">
                        <span className="text-[#C792EA]">&nbsp; <span className='text-Description font-bold'>1</span> const</span> <span className='text-primary2'>skills</span><span className='text-yellow-400'> = [</span><br />
                        <div className='bg-[#12151d] border-l-4 border-primary '>
                            <p className='flex items-center gap-1'>&nbsp;<span className='text-Description font-bold'>2 </span> &nbsp;'<img className='w-3' src={html} alt="" />Html5'<br /></p>
                            <p className='flex items-center gap-1'>&nbsp;<span className='text-Description font-bold'>3 </span> &nbsp;'<img className='w-3' src={css} alt="" />Css3'<br /></p>
                            <p className='flex items-center gap-1'>&nbsp;<span className='text-Description font-bold'>4 </span> &nbsp;'<img className='w-3' src={tailwind} alt="" />Tailwind Css'<br /></p>
                            <p className='flex items-center gap-1'>&nbsp;<span className='text-Description font-bold'>5 </span> &nbsp;'<img className='w-3' src={js} alt="" />JavaScript'<br /></p>
                            <p className='flex items-center gap-1'>&nbsp;<span className='text-Description font-bold'>6 </span> &nbsp;'<img className='w-3' src={nodejs} alt="" />Node Js'<br /></p>
                            <p className='flex items-center gap-1'>&nbsp;<span className='text-Description font-bold'>7 </span> &nbsp;'<img className='w-2' src={mongodb} alt="" />MongoDB'<br /></p>
                        </div>
                        <span className='text-yellow-400'>&nbsp;&nbsp;<span className='text-Description font-bold'>7 </span>]</span><span className='text-primary2'>;</span><br />
                        <span className="text-[#C792EA] ">&nbsp;&nbsp;<span className='text-Description font-bold'>8 </span> if</span> <span className='text-yellow-400'>(</span><span className='text-primary2'>have_a_project</span><span className='text-yellow-400'>)</span> <span className='text-[#C792EA]'>navigate</span><span className='text-yellow-400'>(</span>'/contact'<span className='text-yellow-400'>)</span>
                        <motion.div
                            initial={{ opacity: 1, y: -50, x: 400 }}
                            animate={{
                                opacity: 1,
                                y: [0, -20, 0, 20, 0],
                                x: 400,
                                rotate: [0, 15, 0, -15, 0],
                            }}
                            transition={{
                                duration: 5, // Increase the duration to make the movement slower and smoother
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className='absolute z-[1]'
                        >
                            <img src={shape} className='w-[40px] rotate-90 ' alt="" />
                        </motion.div>

                    </code>
                </pre>
                 
                <div>
                    <div className='flex gap-6 items-center mt-6'>
                        <button className='text-white border uppercase px-6 py-3 rounded-3xl text-sm border-primary'>
                            <a className='flex items-center' href={resume} download={"resume"}>
                                <motion.div
                                    initial={{ opacity: 1, y: 5, x: 0 }}
                                    animate={{ opacity: 1, y: 0, x: 0, }}
                                    transition={{ duration: 0.5, repeat: Infinity, repeatType: "mirror" }}
                                    className=''>
                                    <i className="bi bi-cloud-download mr-2"></i>
                                </motion.div>
                                Download Resume
                            </a>
                        </button>
                        <button
                            className='text-primary2 border-b border-primary flex gap-2 items-center uppercase'
                            onClick={() => navigate('#contact')}
                            onMouseEnter={handleHover}
                            onMouseLeave={handleHover}
                        >
                            Contact Now
                            <FiArrowUpRight className={`text-secondary text-xl transition duration-500 ${hovered ? 'rotate-0' : 'rotate-45'}`} />
                        </button>
                    </div>
                </div>
            </div>
            <div id='contact' className='w-full relative'>
                <motion.div
                    initial={{ opacity: 1, y: 150, x: 0 }}
                    animate={{ opacity: 1, y: 150, x: [-20, 5], rotate:[0,-5] }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: 'mirror' }}
                    className='absolute z-[1]'>
                    <img src={shape} alt="" />
                </motion.div>
                <div className='bg-[#22395E] box-shadow rounded-full size-[480px] mt-6 relative'>
                    {/* <div className='absolute z-[1] inset-0 size-[480px] rounded-full bg-gradient-to-b from-transparent to-[#0e1f55] opacity-20'></div> */}
                    <img className='w-full  bottom-6 rounded-full rotate-[3deg] absolute ' src={munna1} alt="" />
                    
                    <div className="absolute right-[-20px] top-[20%] flex flex-col items-center ">
                        <a href='https://www.facebook.com/mkmunna' className="group p-4 bg-gradient-to-b to-[#2A343D] from-[#131B26]  hover:bg-gradient-to-b hover:from-[#166bf5] duration-700 transition-all hover:to-[#5190f5]  rounded-full right-5  z-[1] absolute">
                            <FaFacebook className="text-white text-2xl" />
                            <span className="absolute tooltip-bubble left-full top-1/2 -translate-y-1/2 px-[10px] py-[5px] bg-white text-black text-sm opacity-0 transition-all duration-[500ms] z-[1] group-hover:opacity-100 translate-x-0 group-hover:translate-x-4 ">Facebook</span>
                        </a>
                        <a href='https://www.linkedin.com/in/mkmunna' className="group p-4 bg-gradient-to-b to-[#2A343D] from-[#131B26]  hover:bg-gradient-to-b hover:from-[#166bf5] duration-700 transition-all hover:to-[#5190f5]   rounded-full -right-1 top-[70px] z-[1] absolute">
                            <FaLinkedin className="text-white text-2xl" />
                            <span className="absolute tooltip-bubble left-full top-1/2 -translate-y-1/2 px-[10px] py-[5px] bg-white text-black text-sm opacity-0 transition-all duration-[500ms] z-[1] group-hover:opacity-100 translate-x-0 group-hover:translate-x-4 ">Linkedin</span>
                        </a>
                        <a href='https://github.com/mk-munna' className="group  p-4 bg-gradient-to-b to-[#2A343D] from-[#131B26]  hover:bg-gradient-to-b hover:from-[#166bf5] duration-700 transition-all hover:to-[#5190f5]   rounded-full -right-1 top-[140px] z-[1] absolute">
                            <FaGithub className="text-white text-2xl" />
                            <span className="absolute tooltip-bubble left-full top-1/2 -translate-y-1/2 px-[10px] py-[5px] bg-white text-black text-sm opacity-0 transition-all duration-[500ms] z-[1] group-hover:opacity-100 translate-x-0 group-hover:translate-x-4 ">Github</span>
                        </a>
                        <a href='mailto:mkmunnaofficial@gmail.com' className="group  p-4 bg-gradient-to-b to-[#2A343D] from-[#131B26]  hover:bg-gradient-to-b hover:from-[#166bf5] duration-700 transition-all hover:to-[#5190f5]   rounded-full right-3 top-[210px] z-[1] absolute">
                            <FaEnvelope className="text-white text-xl" />
                            <span className="absolute tooltip-bubble left-full top-1/2 -translate-y-1/2 px-[10px] py-[5px] bg-white text-black text-sm opacity-0 transition-all duration-[500ms] z-[1] group-hover:opacity-100 translate-x-0 group-hover:translate-x-4">
                                Email
                            </span>
                        </a>
                    </div>
                    

                </div>
            </div>
        </div>
    );
};
export default Banner;
