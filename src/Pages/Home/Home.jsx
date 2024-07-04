import React from 'react';
import Banner from '../../Components/Banner';
import Skills from '../../Components/Skills';
import Education from '../../Components/Education';
import Projects from '../../Components/Projects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Skills></Skills>
            <Education></Education>
            <Projects></Projects>
        </div>
    );
};

export default Home;