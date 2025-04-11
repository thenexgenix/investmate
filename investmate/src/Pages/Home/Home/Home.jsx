import React from 'react';
import { Banner } from '../Banner/Banner';
import { Opportunities } from '../Opportunities/Opportunities';
import { Return } from '../Return/Return';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Opportunities></Opportunities>
            <Return></Return>
        </div>
    );
};

export default Home;