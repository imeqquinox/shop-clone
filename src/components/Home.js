import React from 'react';
import BrushOutlinedIcon from '@material-ui/icons/BrushOutlined';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import SpaOutlinedIcon from '@material-ui/icons/SpaOutlined';
import RestaurantOutlinedIcon from '@material-ui/icons/RestaurantOutlined';

import './css/Home.css'

function Home() {
    return (
        <div className='home'>
            <div className='home__motto'>
                <h1 className='home__motto text'>
                    Sustainably crafted goods to elevate your everyday.
                </h1>
            </div>

            {/* Product selection */}
            <div className='home__productcontainer'>
                <div className='home__product glassware'>
                    Glassware
                </div>
                <div className='home__product textiles'>
                    Textiles
                </div>
                <div className='home__product dinnerware'>
                    Dinnerware
                </div>
                <div className='home__product serveware'>
                    Serveware
                </div>
                <div className='home__product flatware'>
                    Flatware
                </div>
            </div>

            <div className='home__promovideo'>
                Video here
            </div>

            {/* Reviews */}
            <div className='home__reviews'>
                <span className='home__review message'>
                    We believe in simple, timeless, and responsible designs.
                </span>
                <div className='home__reviewcontainer'>
                    <div className='home__review'>
                        <p>"Such beautiful dishes that I have come to refer to as my shelf art! 
                        if you have open shelving these dishes are for you. They are unique."</p>
                        <span className='home__reviewperson'>Glen, Niagara Falls, ON</span>
                    </div>
                    <div className='home__review'>
                        <p>"I loved these dishes from the get-go! Knew I had to have them.
                         I chose three colours and they go together beautifully."</p>
                        <span className='home__reviewperson'>Vanessa, Sherwood Park, AB</span>
                    </div>
                    <div className='home__review'>
                        <p>"If you've been contemplating purchasing these plates - go for it!
                        They've elevated my dining experience and make meals so much more enjoyable!"</p>
                        <span className='home__reviewperson'>Tobi, Vancouver, BC</span>
                    </div>
                </div>
            </div>

            {/* Bundle collections */}
            <div>
                <h3>Discover our bundled collections</h3>
            </div>

            {/* Company pillars */}
            <div className='home__companypillars'>
                <div className='home__pillaricon'>
                    <BrushOutlinedIcon />
                </div>
                <span className='home__pillartitle'>Responsible Design</span>
                <div className='home__pillarinfo'>
                    <p>
                        Designed with integrity and durably crafted for everyday use.
                    </p>
                </div>
                <div className='home__pillaricon'>
                    <LocalOfferOutlinedIcon />
                </div>
                <span className='home__pillartitle'>Transparent Pricing</span>
                <div className='home__pillarinfo'>
                    <p>
                        We believe in accessible pricing and full transparency. Our pricing model is an open book.
                    </p>
                </div>
                <div className='home__pillaricon'>
                    <SpaOutlinedIcon />
                </div>
                <span className='home__pillartitle'>Sustainable Sourcing</span>
                <div className='home__pillarinfo'>
                    <p>
                        We only partner with people who put the earth, and its people, first.
                    </p>
                </div>
                <div className='home__pillaricon'>
                    <RestaurantOutlinedIcon />
                </div>
                <span className='home__pillartitle'>Giving Back</span>
                <div className='home__pillarinfo'>
                    <p>
                        Thanks to Mealshare, every purchase directly donates a meal to a youth in need.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;
