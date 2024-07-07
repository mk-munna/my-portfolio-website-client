import React, { useState } from 'react';
import './header.css';
import logo from '../assets/logo.svg';
import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';
import resume from  "../../public/Mk-Munna-Resume.pdf"
const Header = () => {
    const [activeLink, setActiveLink] = useState('home');

    const handleSetActiveLink = (link) => {
        setActiveLink(link);
    };

    return (
        <div className='flex justify-between items-center py-8 max-w-6xl mx-auto '>
            <div className='text-xl font-semibold text-primary2 flex gap-2 items-center'>
                <img className='w-[25px]' src={logo} alt="" />
                Mk Munna
            </div>
            <ul className="md:flex space-x-10  text-primary2">
                <li>
                    <HashLink
                        smooth
                        to="/#home"
                        className={activeLink === 'home' ? 'active' : ''}
                        onClick={() => handleSetActiveLink('home')}
                    >
                        {activeLink === 'home' ? <p> <span className='text-secondary'>{"<"}</span>{"Home"} <span className='text-secondary'>{"/>"}</span> </p> : 'Home'}
                    </HashLink>
                </li>
                <li>
                    <HashLink
                        smooth
                        to="/#projects"
                        className={activeLink === 'projects' ? 'active' : ''}
                        onClick={() => handleSetActiveLink('projects')}
                    >
                        {activeLink === 'projects' ? <p> <span className='text-secondary'>{"<"}</span>{"Projects"} <span className='text-secondary'>{"/>"}</span> </p> : 'Projects'}
                    </HashLink>
                </li>
                <li>
                    <HashLink
                        smooth
                        to="/#skill"
                        className={activeLink === 'skill' ? 'active' : ''}
                        onClick={() => handleSetActiveLink('skill')}
                    >
                        {activeLink === 'skill' ? <p> <span className='text-secondary'>{"<"}</span>{"Skills"} <span className='text-secondary'>{"/>"}</span> </p> : 'Skills'}
                    </HashLink>
                </li>
                <li>
                    <HashLink
                        smooth
                        to="/#education"
                        className={activeLink === 'education' ? 'active' : ''}
                        onClick={() => handleSetActiveLink('education')}
                    >
                        {activeLink === 'education' ? <p> <span className='text-secondary'>{"<"}</span>{"Education"} <span className='text-secondary'>{"/>"}</span> </p> : 'Education'}
                    </HashLink>
                </li>
                <li>
                    <HashLink
                        smooth
                        to="/#contact"
                        className={activeLink === 'contact' ? 'active' : ''}
                        onClick={() => handleSetActiveLink('contact')}
                    >
                        {activeLink === 'contact' ? <p> <span className='text-secondary'>{"<"}</span>{"Contact"} <span className='text-secondary'>{"/>"}</span> </p> : 'Contact'}
                    </HashLink>
                </li>
            </ul>
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
            
        </div>
    );
};

export default Header;
