import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [carts, setCarts] = useState([])

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    // console.log(products)
    const cartHandle = (product) =>{
        const newCarts = [...carts, product];
        setCarts(newCarts)
    }

    return (
        <div className='grid grid-cols-5 shop-container'>

                <div className='xl:col-span-4 md:col-span-4 sm:col-span-3 mx-5'>
                    <h1 className='text-center '>this container where we show product</h1>
                    <p>{products.length}</p>
                    <div className='grid grid-cols-4 gap-5'>
                        
                    {
                        products.map(product=> <Product key={product.id} product={product} cartHandle={cartHandle}></Product>)
                    }
                    </div>
                </div>
                <div>
                    <Cart carts={carts}></Cart>
                </div> 
        </div>
    );
};

export default Shop;