import { Button, Grid } from '@mui/material'
import React from 'react'

function About() {
    return (
        <div className='about-section' style={{flexDirection: 'row'}}>
            <Grid container>
                <Grid md={6}>
                {/* <Grid style={{width: '50%', paddingInline: 10}}> */}
                <div></div>
                <div></div>
                </Grid>
                <Grid md={6}>
                {/* <Grid style={{width: '50%', paddingInline: 10}}> */}
                    <h3>About Me</h3>
                    <h2>I'm Dr. Kierra Calzoni. <strong>Actually, I love to care</strong> <em>Patient</em>.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor proin id aliquet lacinia vulputate non. Rhoncus,<br/>Blandit feugiat viverra est Suspendisse porta tortor commodo.<br/>Tempor proin id aliquet lacinia vulputate non. Rhoncus, blandit feugiat viverra est suspendisse porta tortor commodo, tellus. Neque.</p>
                    <Button variant='contained'>Let's Talk</Button>
                </Grid>

            </Grid>
        </div>
    )
}

export default About
