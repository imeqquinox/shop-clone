import React from 'react';
import BrushOutlinedIcon from '@material-ui/icons/BrushOutlined';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import SpaOutlinedIcon from '@material-ui/icons/SpaOutlined';
import RestaurantOutlinedIcon from '@material-ui/icons/RestaurantOutlined';

import './css/Home.css'
import CategoryCard from '../components/CategoryCard';
import Review from '../components/Review';
import CompanyPillar from '../components/CompanyPillar';
import BlogCard from '../components/BlogCard';

import GlassCardImg from '../images/glass.jpg';
import TextilesCardImg from '../images/textiles.jpg';
import DinnerwareCardImg from '../images/dinnerware.png';
import ServewareCardImg from '../images/serveware.jpg';
import FlatwareCardImg from '../images/flatware.jpg';
import Bundle1Img from '../images/bundle1.jpg';
import Bundle2Img from '../images/bundle2.jpg';
import Blog1Img from '../images/blog1.jpg';
import Blog2Img from '../images/blog2.jpg';
import Blog3Img from '../images/blog3.jpg';


function Home() {
    return (
        <div className='home'>
            <div className='home__motto'>
                <h1 className='home__motto text'>
                    Sustainably crafted goods to elevate your everyday.
                </h1>
            </div>

            {/* Product selection */}
            <section>
                <div className='home__products container'>
                    <CategoryCard category="Glassware" img={GlassCardImg}/>
                    <CategoryCard category="Textiles" img={TextilesCardImg}/>
                    <CategoryCard category="Dinnerware" img={DinnerwareCardImg}/>
                    <CategoryCard category="Serveware" img={ServewareCardImg}/>
                    <CategoryCard category="Flatware" img={FlatwareCardImg}/>
                </div>
            </section>

            <section>
                <div className='home__promovideo container'>    
                    <h2 className='home__promovideo title'>
                        Video here
                    </h2>
                </div>
            </section>
            

            {/* Reviews */}
            <section>
                <div className='home__reviews container'>
                    <h2 className='home__review message'>
                        We believe in simple, timeless, and responsible designs.
                    </h2>
                    <div className='home__reviewcontainer'>
                        <Review 
                            review="Such beautiful dishes that I have come to refer to as my shelf art! 
                            if you have open shelving these dishes are for you. They are unique."
                            reviewer="Glen"
                            location="Niagara Falls, ON"
                        />
                        <Review 
                            review="I loved these dishes from the get-go! Knew I had to have them.
                            I chose three colours and they go together beautifully."
                            reviewer="Vanessa"
                            location="Sherwood Park, AB"
                        />
                        <Review
                            review="If you've been contemplating purchasing these plates - go for it!
                            They've elevated my dining experience and make meals so much more enjoyable!"
                            reviewer="Tobi"
                            location="Vancouver, BC"
                        />
                    </div>
                </div>
            </section>

            {/* Bundle collections */}
            <section>
                <div className='home__bundle container'>
                    <h2 className='home__bundle title'>
                        Discover our bundled collections
                    </h2>
                    <div className='home__bundles'>
                        <CategoryCard category="Bundles" img={Bundle1Img}/>
                        <img className='home__bundle img' src={Bundle2Img} alt="Bundle product"/>
                        <img className='home__bundle img' src={TextilesCardImg} alt="Bundle product"/>
                    </div>
                </div>
            </section>
            

            {/* Company pillars */}
            <section>
                <div className='home__companypillars container'>
                    <CompanyPillar 
                        icon={<BrushOutlinedIcon />}
                        title="Responsible Design"
                        info="Designed with integrity and durably crafted for everyday use."
                    />
                    <CompanyPillar 
                        icon={<LocalOfferOutlinedIcon />}
                        title="Transparent Pricing"
                        info="We believe in accessible pricing and full transparency. Our pricing model is an open book."
                    />
                    <CompanyPillar 
                        icon={<SpaOutlinedIcon />}
                        title="Sustainable Sourcing"
                        info="We only partner with people who put the earth, and its people, first."
                    />
                    <CompanyPillar 
                        icon={<RestaurantOutlinedIcon />}
                        title="Giving Back"
                        info="Thanks to Mealshare, every purchase directly donates a meal to a youth in need."
                    />  
                </div>
            </section>

            {/* Magazine/blog section */}
            <section>
                <div className='home__magazine container'>
                    <h2 className='home__magazine title'>
                        From the magazine
                    </h2>
                    <div className='home__magazineblogs'>
                        <BlogCard 
                            img={Blog1Img} 
                            title="Sweet & Savory Comfort Food Recipes"
                            date="November 17, 2021"
                            preview="Comfort food doesn't always look like mac 'n cheese-it often looks
                                    like a memory in meal form, passed down from someone special. This 
                                    Mother's day, we're honouring all the women..."
                        />
                        <BlogCard 
                            img={Blog2Img} 
                            title="Bringing Joy to Every Table"
                            date="November 16, 2021"
                            preview="For many, it has become a daily routine to prepare nutritious meals for
                                    our families and friends, served on carefully chosen dinnerware. The food
                                    we eat becomes merely a second..."
                        />
                        <BlogCard 
                            img={Blog3Img} 
                            title="Preparing a Dinner Table for Success"
                            date="November 16, 2021"
                            preview="Decorating your dinner table is a fun task that can make or break your
                                    dinner party. Everyone who sits down for a meal is going to enjoy a 
                                    beautifully decorated..."
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
