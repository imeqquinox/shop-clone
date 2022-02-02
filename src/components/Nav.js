import React from 'react';
import { Link } from 'react-router-dom';

import './css/Nav.css'

function Nav() {
    return (
        <nav className='navmenu'>
            <Link to="/dinnerware">Dinnerware</Link>
            <Link to="/glassware">Glassware</Link>
            <Link to="/serveware">Serveware</Link>
            <Link to="/flatware">Flatware</Link>
            <Link to="/textiles">Textiles</Link>
            <Link to="/bundles">Bundles</Link>
        </nav>
    );
}

export default Nav;
