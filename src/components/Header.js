import React from 'react'
import Navbar from './Navbar/Navbar'
import { Button, Grid } from '@mui/material'

function Header() {
    return (
        <div className='header-section'>
            <header className='header-background'>
                <Navbar/>
                <div className='header-left-corner'>
                    <div>
                        <h3 className='title-shadow'>Stay Strong, Live long.</h3>
                        <h1><em>Take care</em> of your body and it will take care of <em>you</em>.</h1>
                        <p className='header-subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. blandit feugiat viverra est suspendisse porta tortor commodo, tellus. Neque,</p>
                    </div>
                    <Grid container>
                        <Grid md={6}>
                            <Button className='cta' variant="contained">Get Appointment</Button>
                        </Grid>
                        <Grid md={6}>
                            <Button className='outline-cta' variant="outlined">View Profile</Button>
                        </Grid>
                    </Grid>
                </div>
            </header>
        </div>
    )
}

export default Header
