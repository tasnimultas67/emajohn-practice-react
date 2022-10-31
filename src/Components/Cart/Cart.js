import React from 'react';

const Cart = (props) => {
    return (
        <div className='border'>
            <div>
                <p>{props.carts.length}products in cart</p>
            </div>
        </div>
    );
};

export default Cart;