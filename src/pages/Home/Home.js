import React from 'react';
import { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import Offers from '../../components/Offers/Offers';
import Products from '../../components/Products/Products';
import './Home.css'

const Home = ({ handleAddToCart, products, searchBtn }) => {

    return (
        <div>
            <Banner></Banner>
            <Offers></Offers>
            <Products
                products={products}
                searchBtn={searchBtn}
                handleAddToCart={handleAddToCart}
            ></Products>
        </div>
    );
};

export default Home;