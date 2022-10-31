import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    console.log(products)


    return (
        <div className='grid grid-cols-5 shop-container'>

                <div className='xl:col-span-4 md:col-span-4 sm:col-span-3 mx-5'>
                    <h1 className='text-center '>this container where we show product</h1>
                    <div className='grid grid-cols-4 gap-5'>
                    {
                        products.map(product=> <Product key={product.id} product={product}></Product>)
                    }
                    </div>
                </div>
                <div>
                    <h1 className='text-center border'>this where we show product cart</h1>
                </div> 
        </div>
    );
};

export default Shop;