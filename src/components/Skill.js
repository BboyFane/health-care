import { Grid } from '@mui/material'
import React from 'react'

function Skill() {
    return (
        <div className='skill-section' style={{paddingInline: 80}}>
            <div className='skill-introduction' style={{width: '60%', textAlign: 'center', margin: 'auto'}}>
                <h2>My Skill depends on work.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. blandit feugiat viverra est suspendisse porta tortor commodo, tellus. Neque,</p>
            </div>
            <Grid container spacing={2} style={{paddingInline: 10}}>
                <Grid item md={3} className='skill-safety'>
                    <div className='skill-safety-logo'>logo</div>
                    <div className='skill-safety-text'>
                        <h4>title</h4>
                        <p>feugiat viverra est suspendis porta tortor commodo</p>
                    </div>
                </Grid>
                <Grid item md={3} className='skill-cared'>
                    <div className='skill-cared-logo'>logo</div>
                    <div className='skill-cared-text'>
                        <h4>title</h4>
                        <p>feugiat viverra est suspendis porta tortor commodo</p>
                    </div>
                </Grid>
                <Grid item md={3} className='skill-service'>
                    <div className='skill-service-logo'>logo</div>
                    <div className='skill-service-text'>
                        <h4>title</h4>
                        <p>feugiat viverra est suspendis porta tortor commodo</p>
                    </div>
                </Grid>
                <Grid item md={3} className='skill-support'>
                    <div className='skill-support-logo'>logo</div>
                    <div className='skill-support-text'>
                        <h4>title</h4>
                        <p>feugiat viverra est suspendis porta tortor commodo</p>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Skill
