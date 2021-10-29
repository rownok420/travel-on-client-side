import React from 'react';
import Contact from '../../Contact/Contact';
import Banner from '../Banner/Banner';
import Prefect from '../Perfect/Prefect';
import Services from '../Services/Services';
import Travel from '../Travel/Travel';

const Home = () => {
    return (
        <div>
            <Banner />
            <Prefect />
            <Travel />
            <Services />
            <Contact />
        </div>
    );
};

export default Home;