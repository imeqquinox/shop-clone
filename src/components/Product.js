import React from 'react';
import './Product.css';

function Product({ id, title, image, price, rating }) {
    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>£</small>
                    <b>{price}</b>
                </p>

                <div className='product__rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))
                    }
                </div>
            </div>

            <img src={image} alt="Product"/>

            <button>Add to Basket</button>
        </div>
    )
}

export default Product
