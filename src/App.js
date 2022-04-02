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
import useProducts from './hooks/useProducts';
import './App.css'
import useCart from './hooks/useCart';
import { addToDb } from './utilities/fakedb';
import Construction from './components/Construction/Construction';

const App = () => {
    //get custom hook 
    const [searchText, setSearchText] = useState('')
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart(products)

    console.log(cart);

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
    const handleAddToCart = selectedProduct => {
        let newCart = []
        const exists = cart.find(product => product.id === selectedProduct.id)
        if (!exists) {
            selectedProduct.quantity = 1
            newCart = [...cart, selectedProduct]
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }
        setCart(newCart)
        addToDb(selectedProduct.id)
    }

    //handle search filed
    const searchBtn = (e) => {
        setSearchText(e.target.value)

    }
    return (
        <div className='overflow-hidden '>
            <Header cart={cart}></Header>
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
                <Route path='/orders/construction' element={<Construction></Construction>}></Route>
                <Route path='*' element={<NotFound></NotFound>}></Route>
            </Routes>

            <Footer></Footer>
        </div>
    );
};

export default App;