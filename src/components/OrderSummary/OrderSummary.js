import React from 'react';
import './OrderSummary.css';
import './OrderSummary.css'
import { RiDeleteBin2Fill } from 'react-icons/ri'

const OrderSummary = (props) => {
    const { handleRemoveProduct, orderItem } = props
    const { img, name, price, quantity } = orderItem
    return (
        <div>
            <div className="row container order-container mb-4 mt-3">
                <div className="col-lg-10 col-sm-10 product-container py-1">
                    <div><img className='order-img me-5' src={img} alt="" /></div>
                    <div>
                        <h5 className='mt-3' title={name}>{name?.length > 25 ? name.slice(0, 25) + '...' : name}</h5>
                        <p className='p-0 m-0'><small>Quantity : {quantity}</small></p>
                        <p className='p-0 m-0'>Price : <span className='text-warning fs-5 fw-bold'>${price}</span></p>
                    </div>
                </div>
                <div className="col-lg-2 col-sm-2 " >
                    <RiDeleteBin2Fill onClick={() => handleRemoveProduct(orderItem)} className='deleteIcon' ></RiDeleteBin2Fill>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;