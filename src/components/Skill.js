import { Card, Grid } from '@mui/material'
import React from 'react'

function Skill() {
    return (
        <div className='skill-section' style={{paddingInline: 80}}>
            <div className='skill-introduction' style={{width: '55%', textAlign: 'center', margin: 'auto'}}>
                <h2>My Skill <em>depends</em> on work.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. blandit feugiat viverra est suspendisse porta tortor commodo, tellus. Neque,</p>
            </div>
            <Grid container spacing={2} style={{paddingInline: 10, textAlign: 'center'}}>
                <Grid item md={3} className='skill-safety'>
                    <Card style={{backgroundColor: '#F25A3C', width: 265, height: 350}}>
                        <div className='skill-safety-logo'>logo</div>
                        <div className='skill-safety-text'>
                            <h4>title</h4>
                            <p>feugiat viverra est suspendis porta tortor commodo</p>
                        </div>
                    </Card>
                </Grid>
                <Grid item md={3} className='skill-cared'>
                    <Card style={{backgroundColor: '#CC7926', width: 265, height: 350}}>
                        <div className='skill-cared-logo'>logo</div>
                        <div className='skill-cared-text'>
                            <h4>title</h4>
                            <p>feugiat viverra est suspendis porta tortor commodo</p>
                        </div>
                    </Card>
                </Grid>
                <Grid item md={3} className='skill-service'>
                    <Card style={{backgroundColor: '#739D1E', width: 265, height: 350}}>
                    <div className='skill-service-logo'>logo</div>
                    <div className='skill-service-text'>
                        <h4>title</h4>
                        <p>feugiat viverra est suspendis porta tortor commodo</p>
                    </div>
                    </Card>
                </Grid>
                <Grid item md={3} className='skill-support'>
                    <Card style={{backgroundColor: '#20BBA1', width: 265, height: 350}}>
                    <div className='skill-support-logo'>logo</div>
                    <div className='skill-support-text'>
                        <h4>title</h4>
                        <p>feugiat viverra est suspendis porta tortor commodo</p>
                    </div>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default Skill
