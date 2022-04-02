import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../../components/Cart/Cart';

const Orders = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart(products)
    const handleRemoveProduct = product => {
        const rest = cart.filter(pd => pd.id !== product.id)
        setCart(rest)
        removeFromDb(product.id)
    }
    return (
        <div className='container'>
            <h3 className='mt-2 text-center'>Order page</h3>
            <div className="row">
                <div className="col-lg-4">
                    <Cart cart={cart}></Cart>
                </div>
                <div className="col-lg-8">
                    {
                        cart.map(orderItem => <OrderSummary
                            key={orderItem.id}
                            orderItem={orderItem}
                            handleRemoveProduct={handleRemoveProduct}
                        ></OrderSummary>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Orders;