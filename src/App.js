import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Laptops from './pages/Laptops/Laptops';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import NotFound from './components/NotFound/NotFound';
import Footer from './pages/Footer/Footer';
import Orders from './pages/Orders/Orders';
import { FaCartPlus } from 'react-icons/fa'
import useProducts from './hooks/useProducts';
import './App.css'

const App = () => {

    //get custom hook 
    const [searchText, setSearchText] = useState('')
    const [products, setProducts] = useProducts()

    //input field

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                const foundPd = data.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
                setProducts(foundPd)
            })
    }, [searchText, setProducts])

    //handle addToCart 
    const handleAddToCart = (product) => {
        console.log(product);
    }

    //handle search filed
    const searchBtn = (e) => {
        setSearchText(e.target.value)

    }
    return (
        <div className='overflow-hidden '>
            <Header></Header>
            <Routes>
                <Route path='/' element={<Home
                    products={products}
                    searchBtn={searchBtn}
                    handleAddToCart={handleAddToCart}
                ></Home>}></Route>
                <Route path='/laptops' element={<Laptops></Laptops>}></Route>
                <Route path='/about-us' element={<About></About>}></Route>
                <Route path='/contact-us' element={<Contact></Contact>}></Route>
                <Route path='/orders' element={<Orders></Orders>}></Route>
                <Route path='*' element={<NotFound></NotFound>}></Route>
            </Routes>
            <div className="cart-icon-container">
                <FaCartPlus className='cart-icon'></FaCartPlus>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default App;