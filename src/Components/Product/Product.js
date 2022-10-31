import React from 'react';
import './product.css'

const Product = (props) => {

    const {title, rating, image, category, price} = props.product
    return (
        <div className='relative product-container border rounded-md hover:border-amber-600 '>
            <div className=''>
                <div>
                    <img src={image} alt="" className='w-32 m-auto product-img' />
                </div>
                <div className='text-center mt-2 p-5'>
                    <p className='p-2 bg-gray-100 w-100 m-auto text-black'>{category}</p>
                    <h1 className='mt-2 product-txt font-semibold' >{title}</h1>
                    <h1 className='text-3xl font-bold '>${price}</h1>
                </div>
                <button className='p-2 bg-amber-600 text-white absolute bottom-0 product-btn' onClick={()=>props.cartHandle(props.product)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;