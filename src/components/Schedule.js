import { Button, Grid } from '@mui/material'
import React from 'react'

function Schedule() {
    return (
        <div className='schedule-section' style={{flexDirection: 'row'}}>
            <Grid container spacing={2} style={{paddingInline: 10}}>
                <Grid item md={6}>
                    <h3>Schedule</h3>
                    <h2>Let's See <strong>my schedule time! When i</strong> <em>Free</em>.</h2>
                    <p><strong>Blandit feugiat viverra est tortor commodo, tellus Neque.</strong>\nDiam, id felis viverra diam. Molestie sollicitudin semper ornare dolor augue auctor eget nisl.Lorem ipsum dolor sit.</p>
                    <h4>Medical check-up reviews:</h4>
                    <div style={{flexDirection: 'row'}}>
                        <div>
                            <div></div>
                            <p>Heartbeat Rate</p>
                        </div>
                        <div>
                            <div>Glucose Tolerance Test</div>
                            <div></div>
                        </div>
                        <div>
                            <div>Blood Pressure</div>
                            <div></div>
                        </div>
                        <div>
                            <div>Blood Sugar Level</div>
                            <div></div>
                        </div>
                    </div>
                </Grid>
                <Grid item md={6}>    
                    <div></div>
                    <div>
                        <Button variant='contained'>Let's Talk</Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Schedule
