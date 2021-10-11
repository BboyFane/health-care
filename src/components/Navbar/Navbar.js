import React, {useState} from 'react'
import logo from '../../assets/logo-blue.png'
import CTA from '../CTA/CTA'

function Navbar() {
    return (
        // Navbar
        <nav className='navbar'>
            <div className='navbar-container' style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: 50, minWidth: '80%', padding: 20}}>
                {/* Navbar left side */}
                <div className='navbar-container-left'>
                    {/* Logo to update and make it clickable */}
                    <a href='/' target='_blank'>
                        <img alt='Health-Care logo' src={logo}/>
                    </a>
                </div>
                {/* Navbar center */}
                <div className='navbar-container-center' style={{display: 'flex', minWidth: '50%'}}>
                    {/* Change list to be link */}
                    <ul style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', minWidth: '100%', listStyle: 'none'}}>
                        <li><a href='/' target='_blank'Z>Home</a></li>
                        <li><a href='/work' target='_blank'>Work</a></li>
                        <li><a href='/about' target='_blank'>About</a></li>
                        <li><a href='/schedule' target='_blank'>Schedule</a></li>
                        <li><a href='/reviews' target='_blank'>Reviews</a></li>
                        <li><a href='/blog' target='_blank'>Blog</a></li>
                    </ul>
                </div>
                {/* Navbar right side */}
                <div className='navbar-container-right'>
                    {/* Rework the design */}
                    <CTA variant='primary' buttonName="Let's Talk"></CTA>
                    <button>Let's Talk</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
