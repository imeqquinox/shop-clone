import React from 'react';

import './css/ProductPage.css';
import ProductCard from '../components/ProductCard';

function ProductPage(props) {
    console.log(props.productList.products[0].img);

    return (
        <div className='productpage'>
            <section>
                <div className='productpage__header container'>
                    <h1 className='productpage__title'>
                        {props.title}
                    </h1>
                    <p className='productpage__bio'>
                        {props.bio}
                    </p>
                </div>
            </section>

            <h1 className='productpage__filter container'>
                Filter
            </h1>

            <section>
                <ul className='productpage__products container'>
                    { props.productList.products.map(item => (
                        <ProductCard 
                            name={item.name}
                            img={window.location.origin + item.img}
                            title={item.title}
                            price={item.price}
                        />  
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default ProductPage;
