import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Laptops from './pages/Laptops/Laptops';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Cart from './pages/Cart/Cart';
import NotFound from './components/NotFound/NotFound';
// import Footer from './pages/Footer/Footer';

const App = () => {
    return (
        <div className='overflow-hidden '>
            <Header></Header>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/laptops' element={<Laptops></Laptops>}></Route>
                <Route path='/about-us' element={<About></About>}></Route>
                <Route path='/contact-us' element={<Contact></Contact>}></Route>
                <Route path='/cart' element={<Cart></Cart>}></Route>
                <Route path='*' element={<NotFound></NotFound>}></Route>
            </Routes>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default App;