import React from 'react';

import logo from './logo.png';
import './Header.css';

function Header () {
    return (
        <div className='shelfie-header'>
            <img src={ logo } alt="shelfie logo"/>
            <h1>SHELFIE</h1>
            <button>Dashboard</button>
            <button>Add Inventory</button>
        </div>
    )
}

export default Header;