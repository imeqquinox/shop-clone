import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

import Nav from './Nav';
import HeaderLogo from '../images/Header_Logo_100x.png';
import "./css/Header.css"

function Header() {
    return ( 
        <header className='header'>
            <div className='header__search'>
                <SearchIcon />
            </div>
            <div className='header__logo'>
                <Link to="/">
                    <img src={HeaderLogo} alt="Logo"/>
                </Link>
            </div>
            <div className='header__cart'>
                <ShoppingCartIcon />
            </div>

            <Nav/>
        </header>
    );
}

export default Header;
