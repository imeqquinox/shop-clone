import React from 'react';
import { Link } from 'react-router-dom';

function BlogCard(props) {
    return (
        <div className='home__magazinecard'>
            <Link class='home__magazinelink' to={`/${props.title}`}>
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
            </Link>
        </div>
    );
}

export default BlogCard;
