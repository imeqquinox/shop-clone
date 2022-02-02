import React from 'react';

function Review(props) {
    return (
        <div className='home__review'>
            <p>
                "{props.review}"
            </p>
            <span className='home__reviewperson'>{props.reviewer}, {props.location}</span>
        </div>
    );
}

export default Review;
