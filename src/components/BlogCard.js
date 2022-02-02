import React from 'react';

function BlogCard(props) {
    return (
        <div className='home__magazinecard'>
            <img src={props.img} alt="Blog preview"/>
            <div className='home__magazinecontent'>
                <h3 className='home__magazineblogtitle'>
                    {props.title}
                </h3>
                <span className='home__magazinedate'>
                    {props.date}
                </span>
                <p className='home__magazinepreview'>
                    {props.preview}
                </p>
            </div>
        </div>
    );
}

export default BlogCard;
