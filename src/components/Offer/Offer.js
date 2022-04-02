import React from 'react';
import './Offer.css'

const Offer = (props) => {
    const { name, img, price, feature1, feature2, feature3, feature4 } = props.offer
    return (
        <div className="col-md-6 cart-container">
            <div className="cart p-2 m-3 p-4 bg text-center">
                <img className='w-50 m-auto  rounded' src={img} alt="" />
                <h4 className='py-2'>{name}</h4>
                {/* <p className='pb-3'>{description.slice(0, 180)}</p> */}
                <li>{feature1}</li>
                <li>{feature2}</li>
                <li>{feature3}</li>
                <li>{feature4}</li>
                <div className="text-center mt-4">
                    <button type='button' className="btn btn-warning ">Add Cart Now</button>
                </div>
            </div>
        </div>
    );
};

export default Offer;