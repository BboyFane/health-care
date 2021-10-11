import React from 'react'
import Navbar from './Navbar/Navbar'
import headerBackground from '../assets/header-background.svg'
import { Button } from '@mui/material'

function Header() {
    return (
        <div>
            <header style={{minWidth: '100%', minHeight: '900px', background: `no-repeat center 100% url(${headerBackground})`, backgroundSize: 'cover'}}>
                <Navbar/>
                <div className='header-left-corner' style={{width: '40%', padding: 80, marginTop: 50, position: 'center'}}>
                    <div>
                        <h2>Stay Strong, Live long.</h2>
                        <h1><em>Take care</em> of your body and it will take care of <em>you</em>.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. blandit feugiat viverra est suspendisse porta tortor commodo, tellus. Neque,</p>
                    </div>
                    <Button variant="contained">Get Appointment</Button>
                    {'  '}
                    {/* <span>&nbsp;&nbsp;</span> */}
                    <Button variant="outlined">View Profile</Button>
                </div>
            </header>
        </div>
    )
}

export default Header
