import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';

const Orders = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart(products)
    return (
        <div>
            <h3 className='mt-5 pt-5 text-center'>Order page</h3>
            <div className="row">
                <div className="col-lg-8">

                </div>
                <div className="col-lg-4">

                </div>
            </div>
        </div>
    );
};

export default Orders;