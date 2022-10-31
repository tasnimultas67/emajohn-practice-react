import React from 'react';
import './Cart.css'

const Cart = ({carts}) => {
    let total = 0;
    let Shipping = 0;

    for (const product of carts){
        total = total + product.price;
        Shipping = Shipping + 21;
    }
    const tax = total * 10/100;
    const grandTotal = total + Shipping + tax
    return (
        <div className='cart-container'>
            <div className='border  p-5 text-white bg-amber-600 rounded-md'>
                <div>
                <h1 className='text-2xl text-bold text-center'>Order Summery</h1>
                <p>{carts.length} products in cart</p>
                <p>Total Price: <span className='font-bold'>${total.toFixed(2)}</span></p>
                <p>Total Shipping: <span className='font-bold'>${Shipping}</span></p>
                <p>Tax: <span className='font-bold'>${tax.toFixed(2)}</span></p>
                <p>Grand Total <span className='font-bold'>${grandTotal.toFixed(2)}</span></p>
                </div>
            </div>
            {/* product added history */}
            <div>
                    {
                        carts.map(cart =><CartHistory cart={cart}></CartHistory>)
                    }
            </div>
        </div>
    );
};

const CartHistory = ({cart})=>{
    const {image, title, id}= cart
    console.log(cart)
    return(
        <div className='border p-1 my-2 bg-amber-600 rounded-md'>
            <div className='flex items-center'>
                <img className='border p-1 cart-product-image rounded-md' src={image} alt="" />
                <h1 className='text-sm text-white'>{title}</h1>
            </div>
        </div>
    )
}


export default Cart;

// 50-1 Simple React Assignment be a Lucky One Selector
