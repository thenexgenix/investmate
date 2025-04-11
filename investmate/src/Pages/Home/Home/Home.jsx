import React from 'react';
import { Banner } from '../Banner/Banner';
import { Opportunities } from '../Opportunities/Opportunities';
import { Return } from '../Return/Return';
import { Secure } from '../Secure/Secure';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Opportunities></Opportunities>
            <Return></Return>
            <Secure></Secure>
        </div>
    );
};

export default Home;