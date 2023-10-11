import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

// USING BEM -> BLOCK ELEMENT MODIFIER CSS Class name Notation
const Navbar = () => {
    return (
        <div className='gpt3__navbar'>
            <div className='gpt3__navbar-links'></div>
        </div>
    )
}

export default Navbar