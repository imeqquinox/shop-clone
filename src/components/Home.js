import React from 'react';
import './Home.css';
import Banner from './banner.jpg';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image' src={Banner} alt="Banner"/>

                <div className='home__row'>
                    {/* Product components x2 */}
                    <Product 
                        title="You're Finally Awake Bedroom Couch Sofa Square Pillow"
                        price={15.99}
                        image="https://m.media-amazon.com/images/I/61l2HVUEinL._AC_SL1200_.jpg"
                        rating={5}
                    />
                    <Product 
                        title="CreepyParty Fish Mask Animal Latex Full Head Realistic Masks Fancy Dress"
                        price={16.99}
                        image="https://m.media-amazon.com/images/I/715Bwdhd86L._AC_SL1500_.jpg"
                        rating={4}
                    />
                </div>

                <div className='home__row'>
                    {/* Product components x3 */}
                    <Product 
                        title="Japanese demon art face Skull devil oni karajuku aesthetic T-Shirt"
                        price={15.45}
                        image="https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C81wxmpsecbL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX679._SX._UX._SY._UY_.png"
                        rating={4}
                    />
                    <Product 
                        title="Blivener Chubby Blob Seal Pillow Stuffed Cotton Plush Animal Toy Ocean Pillow"
                        price={58.99}
                        image="https://m.media-amazon.com/images/I/61n9xDbZkgL._AC_SL1300_.jpg"
                        rating={5}
                    />
                    <Product 
                        title="Withings Steel HR - Hybrid Smartwatch - Activity Tracker with Connected GPS"
                        price={134.00}
                        image="https://m.media-amazon.com/images/I/61J8phrQWfS._AC_SL1500_.jpg"
                        rating={3}
                    />
                </div>

                <div className='home__row'>
                    {/* Product component x1 */}
                    <Product 
                        title="Sony BRAVIA KD-65XH90/P - 65-inch - Fully Array LED - 4K"
                        price={1023.99}
                        image="https://m.media-amazon.com/images/I/81WXH++OAgL._AC_SL1500_.jpg"
                        rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
