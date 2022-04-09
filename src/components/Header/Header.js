import React, { useEffect, useState } from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';
import { Link } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.init';
const Header = ({ cart }) => {
    const [getUser, setGetUser] = useState({})

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setGetUser(user)
            } else {
                setGetUser({})
            }
        });
    }, [])

    //sign out 
    const handleLogOut = () => {
        signOut(auth)
            .then(() => {

            })
            .catch((error) => {

            });
    }


    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <Container className='py-2'>
                    <Link className='text-light text-decoration-none' to='/'><h3 >Laptop WareHouse</h3></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end '>
                        <Nav className='nav-style'>
                            <CustomLink className='py-5' to='/'>Home</CustomLink>
                            <CustomLink className='py-5' to='/laptops'>Laptops</CustomLink>
                            <CustomLink className='py-5' to='/about-us'>About Us</CustomLink>
                            <CustomLink className='py-5' to='/contact-us'>Contact Us</CustomLink>

                            {getUser?.uid ? <CustomLink className='py-5 m-0' to='/profile'>
                                <img className='w-25 rounded-circle m-0 p-0' src={getUser?.photoURL} alt="" srcset="" />
                            </CustomLink> : <CustomLink className='py-5' to='/signup'>Sign up</CustomLink>}

                            {getUser?.uid ? <CustomLink className='py-5' to='/login' onClick={handleLogOut}>Log out</CustomLink> : <CustomLink className='py-5' to='/login'>Log in</CustomLink>}
                        </Nav>
                        <Link className='text-light' to='/orders'>
                            <div className=" cart-counter">
                                <span>{cart.length}</span>
                                <FaCartPlus className='cart-icon'></FaCartPlus>
                            </div>
                        </Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;

