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
        <div className='flex justify-between items-center py-8 '>
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
                        {activeLink === 'home' ? '<Home />' : 'Home'}
                    </HashLink>
                </li>
                <li>
                    <HashLink
                        smooth
                        to="/#projects"
                        className={activeLink === 'projects' ? 'active' : ''}
                        onClick={() => handleSetActiveLink('projects')}
                    >
                        {activeLink === 'projects' ? '<Projects />' : 'Projects'}
                    </HashLink>
                </li>
                <li>
                    <HashLink
                        smooth
                        to="/#blogs"
                        className={activeLink === 'blogs' ? 'active' : ''}
                        onClick={() => handleSetActiveLink('blogs')}
                    >
                        {activeLink === 'blogs' ? '<Blogs />' : 'Blogs'}
                    </HashLink>
                </li>
                <li>
                    <HashLink
                        smooth
                        to="/#about"
                        className={activeLink === 'about' ? 'active' : ''}
                        onClick={() => handleSetActiveLink('about')}
                    >
                        {activeLink === 'about' ? '<About />' : 'About'}
                    </HashLink>
                </li>
                <li>
                    <HashLink
                        smooth
                        to="/#contact"
                        className={activeLink === 'contact' ? 'active' : ''}
                        onClick={() => handleSetActiveLink('contact')}
                    >
                        {activeLink === 'contact' ? '<Contact />' : 'Contact'}
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
