import { Grid } from '@mui/material'
import React from 'react'

function Opinion() {
    return (
        <div className='opinion-section'>
            <h2>Let’s see what patient says!</h2>
            <Grid container>
            <Grid item md={6}>
            </Grid>                
            <Grid item md={6} offset={6}>
                <p>Blandit feugiat viverra est tortor commodo, tellus. pellentesque diam, id felis viverra diam. Molestie solli semper ornare dolor augue aucto.</p>
                <h4>Justin Lubin</h4>
                <p>Patient</p>
            </Grid>                
            </Grid>
        </div>
    )
}

export default Opinion
