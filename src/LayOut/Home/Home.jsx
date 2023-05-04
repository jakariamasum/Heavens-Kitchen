import React from 'react';
import Chefs from '../../components/Chefs/Chefs';
import Reviews from '../../components/Reviews/Reviews';
import Banner from '../../components/Banner/Banner';
import Service from '../../components/Service.jsx/Service';

const Home = () => {
    return (
        <div>
            <h4>This is home</h4>
            <Banner></Banner>
            <Chefs></Chefs>
            <Reviews></Reviews>
            <Service></Service>
        </div>
    );
};

export default Home;