import React from 'react';
import "./Checkout.css"; 
import Ad from "./amazon-ad.png";
import Subtotal from './Subtotal';

function Checkout() {
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad'
                src={Ad} alt="Checkout Banner"/>

                <div>
                    <h2 className='checkout__title'>Your Shopping Basket</h2>

                    {/* Basket Items */}
                </div>
            </div>

            <div className='checkout__right'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
