import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import './css/Footer.css'

function Footer() {
    return (
        <section className='footer__section'>
            <div className='footer'>
                <h1 className='footer__title'>
                    Don't miss out
                </h1>
                <div className='footer__subscribe'>
                    Subscribe to our mailing list for insider news, product launches, and more.
                </div>
                <div className='footer__signup'>
                    <div className='footer__container'>
                        <input className='footer__input' type='text' placeholder='Email'></input>
                        <ArrowForwardIcon className='footer__submit' color=""/>
                    </div>
                </div>
                <div className='footer__subtext'>
                    <h2>Get to know Craft</h2>
                </div>
                <div className='footer__links'>
                    <a href='/'>About</a>
                    <a href='/'>Magazine</a>
                </div>
            </div>
        </section>
    );
}

export default Footer;
