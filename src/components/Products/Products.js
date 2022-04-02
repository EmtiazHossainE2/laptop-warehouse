import { useEffect, useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import Product from '../Product/Product';
import './Products.css'
const Products = () => {
    const [searchText, setSearchText] = useState('')
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                const foundPd = data.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
                setProducts(foundPd)
            })
    }, [searchText])

    const searchBtn = (e) => {
        setSearchText(e.target.value)

    }

    const handleClick = () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then(res => res.json())
            .then(data => setProducts(data.meals))
    }

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
                    <button onClick={handleClick} className='btn btn-warning'>Search Now</button>
                </InputGroup>
            </div>

            <div className="container">
                <div className='row'>
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                        ></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;