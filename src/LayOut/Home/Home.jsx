import React from 'react';
import Chefs from '../../components/Chefs/Chefs';
import Reviews from '../../components/Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <h4>This is home</h4>
            <Chefs></Chefs>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;