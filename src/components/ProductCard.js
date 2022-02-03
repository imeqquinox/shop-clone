import React from 'react';

function ProductCard(props) {
    return (
        <li className={`productpage__product ${props.name}`}>
            <div className='productpage__productimage'>
                <img src={props.img} alt={`${props.title}`} />
            </div>
            <div className='productpage__info'>
                <span className='productpage__producttitle'>{props.title}</span>
                <span className='productpage__price'>£{props.price}</span>
            </div>
        </li>
    );
}

export default ProductCard;
