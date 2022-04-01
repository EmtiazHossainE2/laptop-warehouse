import React from 'react';
import './Offer.css'

const Offer = (props) => {
    const { name, img, price, description } = props.offer
    return (
        <div className="col-md-6 ">
            <div className="cart p-2 m-3 p-4 bg text-center">
                <img className='w-50 m-auto  rounded' src={img} alt="" />
                <h4 className='py-3'>{name}</h4>
                <p className='pb-3'>{description.slice(0, 180)}</p>
                <div className='d-flex justify-content-around my-2'>
                    <button type='button' className="btn btn-warning text-light " >Offer Price :$ {price}</button>
                    <button type='button' className="btn btn-warning text-light " >Add Cart Now</button>
                </div>
            </div>
        </div>
    );
};

export default Offer;