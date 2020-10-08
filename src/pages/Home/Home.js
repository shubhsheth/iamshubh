import React from 'react';
import './Home.css';

// Components
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Banner from '../../components/Banner/Banner';

export const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Banner />
        </>
    );
};

export default Home;