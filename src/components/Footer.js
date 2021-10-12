import { Button, Grid } from '@mui/material'
import React from 'react'

function Footer() {
    return (
        <div className='footer-section' style={{paddingInline: 80}}>
            <Grid container spacing={2}>
                <Grid item md={4}>
                    <Grid item>
                        logo
                    </Grid>
                    <Grid item>
                    10 New Town Street, V2 5NW, Newstate, USA.
                    +88(019)24-184 461
                    shovasatkhira@gmail.com
                    </Grid>
                    <Grid item>
                        Social media
                    </Grid>
                </Grid>
                <Grid item md={1}>
                    <h3></h3>
                    <ul>
                        <li>Work</li>
                        <li>About</li>
                        <li>Schedule</li>
                        <li>Blog</li>
                    </ul>
                </Grid>
                <Grid item md={2}>
                    <h3></h3>
                    <ul>
                        <li>Privecy Policy</li>
                        <li>Cookie Policy</li>
                        <li>Purchasing Policy</li>
                        <li>Terms &amp; Conditions</li>
                        <li>Career</li>
                    </ul>
                </Grid>
                <Grid item md={5}>
                    <h3></h3>
                    <p>Blandit feugiat viverra est tortor
                        <br/>
                        commodo, tellus. Neque, pellentesque diam, id felis viverra diam. Molestie sollicitudin semper ornare dolor augue
                    </p>
                    <Button>Email address</Button>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default Footer
