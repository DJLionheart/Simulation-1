import React from 'react';
import { Link } from 'react-router-dom';

import logo from './logo.png';
import './Header.css';

function Header (props) {
    return (
        <div className='shelfie-header'>
            <img src={ logo } alt="shelfie logo"/>
            <h1>SHELFIE</h1>
            <Link to='/'><button onClick={ () => props.clearSelected() }>Dashboard</button></Link>
            <Link to='/form'><button onClick={ () => props.clearSelected() }>Add Inventory</button></Link>
        </div>
    )
}

export default Header;