import React from 'react';
import './product.css'

const Product = (props) => {
    const {title, rating, image, category} = props.product
    return (
        <div>
            <div className='border p-5 product-container rounded-md'>
                <div>
                    <img src={image} alt="" className='w-32 m-auto' />
                </div>
                <div className='text-center mt-2'>
                    <p className='p-2 bg-lime-600 w-32 rounded m-auto text-white'>{category}</p>
                    <h1 className='mt-2'>{title}</h1>

                </div>
            </div>
        </div>
    );
};

export default Product;