import { React, useState } from 'react';
import { Link } from 'react-router-dom';

function TopNavBar() {

    return (<nav className='top-navbar'>
        <h2>Luca Baudo</h2>
        <ul className='links'>
            <li><Link to='/#home'>Home</Link></li>
            <li><Link to='/#about'>About</Link></li>
            <li><Link to='/#projects'>Projects</Link></li>
            <li><Link to='/#contacts'>Contacts</Link></li>
        </ul>
    </nav>)
}

export default TopNavBar