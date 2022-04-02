
import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props
    // console.log(cart);
    let total = 0
    let shipping = 50
    let quantity = 0
    for (const product of cart) {
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity
    }
    const tax = parseFloat(total * 5 / 100)
    const grandTotal = total + shipping + tax



    return (
        <div className='orders-container'>
            <h5 className='py-3'>Order Summary</h5>
            <div>
                <p>Selected Items : {quantity}</p>
                <p>Total Price : ${total}</p>
                <p>Shipping Charge: ${shipping}</p>
                <p>Tax : ${tax}</p>
                <h5>Grand Total : ${grandTotal} </h5>
            </div>
            <Link to={"/orders/" + "construction"}><button className='btn btn-info mt-3 mb-2'>Proceed Checkout</button></Link>

        </div>
    );
};

export default Cart;