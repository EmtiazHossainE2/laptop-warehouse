import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'
const Product = (props) => {
    const { name, img, price, processor } = props.product

    return (
        <div className='col-lg-4 col-md-6'>
            <div className="cart p-3 m-3 cart-container text-center">
                <img className='w-75  m-auto  rounded p-1 ' src={img} alt="" />
                <h4>Name : {name.slice(0, 15)}</h4>
                <p>{processor.slice(0, 70) ? processor.slice(0, 70) + '..' : processor}</p>

                <div className="d-flex justify-content-between pb-3 pt-3">
                    <button className='btn btn-style'>Add To Cart</button>
                    {/* <button className='btn btn-style' onClick={showDetails}>View Details</button> */}
                    <Link to={'/details/'}><button className='btn btn-style'>View Details</button></Link>
                </div>
            </div>

        </div>
    );
};

export default Product;