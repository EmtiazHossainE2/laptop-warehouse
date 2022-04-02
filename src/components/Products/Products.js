import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import Product from '../Product/Product';
import './Products.css'

const Products = (props) => {
    const { searchBtn, products, handleAddToCart } = props

    return (
        <div>
            <div className='text-center my-4'>
                <h2>Search Your Favourite Laptop</h2>
                <InputGroup className="my-3 mx-auto searchBtn ">
                    <FormControl onChange={searchBtn}
                        placeholder="Laptop Name"
                        aria-label="Laptop Name"
                        aria-describedby="basic-addon2"
                    />
                </InputGroup>
            </div>

            <div className="container">
                <div className='row'>
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;