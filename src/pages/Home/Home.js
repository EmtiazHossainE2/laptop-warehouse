import React from 'react';
import Banner from '../../components/Banner/Banner';
import Offers from '../../components/Offers/Offers';
import Products from '../../components/Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offers></Offers>
            <Products></Products>

        </div>
    );
};

export default Home;