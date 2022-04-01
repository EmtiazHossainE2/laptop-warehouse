import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='text-center mt-5'>
            <h2>This page is not available </h2>
            <h1> 404 </h1>
            <Link to='/'><button className='btn btn-primary'> Back Home</button></Link>
        </div>
    );
};

export default NotFound;