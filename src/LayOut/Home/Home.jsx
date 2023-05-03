import React from 'react';
import Chefs from '../../components/Chefs/Chefs';
import Reviews from '../../components/Reviews/Reviews';
import Banner from '../../components/Banner/Banner';

const Home = () => {
    return (
        <div>
            <h4>This is home</h4>
            <Banner></Banner>
            <Chefs></Chefs>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;