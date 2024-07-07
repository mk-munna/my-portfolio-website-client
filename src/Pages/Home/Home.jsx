import React from 'react';
import Banner from '../../Components/Banner';
import Skills from '../../Components/Skills';
import Skills2 from '../../Components/Skills2';
import Education from '../../Components/Education';
import Projects from '../../Components/Projects';
import About from '../../Components/About';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Skills2></Skills2>
            <Education></Education>
            <Projects></Projects>
        </div>
    );
};

export default Home;