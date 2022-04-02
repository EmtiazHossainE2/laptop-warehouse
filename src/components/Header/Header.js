import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container className='py-2'>
                    <Link className='text-light text-decoration-none' to='/'><h3 >Laptop WareHouse</h3></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end '>
                        <Nav className='nav-style'>
                            <CustomLink className='py-5' to='/'>Home</CustomLink>
                            <CustomLink className='py-5' to='/laptops'>Laptops</CustomLink>
                            <CustomLink className='py-5' to='/about-us'>About Us</CustomLink>
                            <CustomLink className='py-5' to='/contact-us'>Contact Us</CustomLink>
                            <CustomLink className='py-5' to='/orders'>Orders</CustomLink>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;

