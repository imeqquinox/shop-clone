import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function ProductCard(props) {
    return (
        <div className={`home__product ${props.category}`}>
            <div className='home__productimage'>
                <img src={props.img} alt={`${props.category} Products`}/>
            </div>
            <div className='home__producttitle'>
                {props.category} <ArrowForwardIcon />
            </div>
        </div>
    );
}

export default ProductCard;
