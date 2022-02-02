import React from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function CategoryCard(props) {
    return (
        <div className={`home__product ${props.category}`}>
            <div className='home__productimage'>
                <Link to={`/${props.category}`}>
                    <img src={props.img} alt={`${props.category} Products`}/>
                </Link>
            </div>
            <Link className='home__productlink' to={`/${props.category}`}>
                <div className='home__producttitle'>
                    {props.category} <ArrowForwardIcon />
                </div>
            </Link>
        </div>
    );
}

export default CategoryCard;
