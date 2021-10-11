import React from 'react'
import Navbar from './Navbar/Navbar'
import headerBackground from '../assets/header-background.svg'

function Header() {
    return (
        <div>
            <header style={{minWidth: '100%', minHeight: '900px', background: `no-repeat center 100% url(${headerBackground})`, backgroundSize: 'cover'}}>
                <Navbar/>
                <div className='header-left-corner' style={{width: '40%', padding: 80, marginTop: 50, position: 'center'}}>
                    <h2>Stay Strong, Live long.</h2>
                    <h1><em>Take care</em> of your body and it will take care of <em>you</em>.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. blandit feugiat viverra est suspendisse porta tortor commodo, tellus. Neque,</p>
                </div>
            </header>
        </div>
    )
}

export default Header
