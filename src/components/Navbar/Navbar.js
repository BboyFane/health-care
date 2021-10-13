import React, {useState} from 'react'
import logo from '../../assets/logo-blue.png'
import { Button } from '@mui/material';

function Navbar() {
    return (
        // Navbar
        <nav className='navbar'>
            <div className='navbar-container' style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: 50, minWidth: '80%', padding: 20}}>
                {/* Navbar left side */}
                <div className='navbar-container-left'>
                    {/* Logo to update and make it clickable */}
                    <a href='/'>
                        <img alt='Health-Care logo' src={logo}/>
                    </a>
                </div>
                {/* Navbar center */}
                <div className='navbar-container-center' style={{display: 'flex', minWidth: '50%'}}>
                    {/* Change list to be link */}
                    <ul style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', minWidth: '100%', listStyle: 'none'}}>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/work'>Work</a></li>
                        <li><a href='/about'>About</a></li>
                        <li><a href='/schedule'>Schedule</a></li>
                        <li><a href='/reviews'>Reviews</a></li>
                        <li><a href='/blog'>Blog</a></li>
                    </ul>
                </div>
                {/* Navbar right side */}
                <div className='navbar-container-right'>
                    {/* Rework the design */}
                    <Button className='cta' variant='contained'>Let's Talk</Button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
