import { Grid } from '@mui/material'
import React from 'react'

function News() {
    return (
        <div className='news-section' style={{paddingInline: 80}}>
            <h2 style={{textAlign: 'center'}}>Let’s see Our <em>latest</em> news</h2>
            <Grid container spacing={4}>
                <Grid container item direction='column' md={6}>
                    <Grid item>
                    <div>pic</div>

                    </Grid>
                    <Grid container item>
                        <Grid item md={7}>
                            By Maria Calzoni
                        </Grid>
                        <Grid item md={5}>
                            21/07/2021
                        </Grid>
                        <h4>Join me and respectfully fight COVID misinformation.</h4>
                        <p>Blandit feugiat viverra est tortor commodo, tellus. Neque, pellentesque diam, id felis viverra diam. Molestie sollicitudin semper ornare dolor augue auctor eget nisl.Lorem ipsum dolor sit amet.<br/>Blandit feugiat viverra est tortor commodo, tellus. Neque, pellentesque diam, id felis viverra diam. Molestie sollicitudin semper ornare dolor augue auctor eget nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Grid>
                </Grid>
                <Grid container item direction='column' md={6}>
                    <Grid container item>
                        <Grid item md={6}>
                            <p><u>Latest News:</u></p>
                        </Grid>
                        <Grid item md={6}>
                            <p>View all</p>
                        </Grid>
                        <Grid container item>
                            <Grid item md={4}/>
                            <Grid item md={8}>
                                <h4>I’m called anti-science I’m just an early...</h4>
                                <a href='/read-more'>Read more</a>
                            </Grid>
                        </Grid>
                        <Grid container item>
                            <Grid item md={4}/>
                            <Grid item md={8}>
                                <h4>Burnout and bias? Or medical...</h4>
                                <a href='/read-more'>Read more</a>
                            </Grid>
                        </Grid>
                        <Grid container item>
                            <Grid item md={4}/>
                            <Grid item md={8}>
                                <h4>Healthy Living With Graves’ Disease.</h4>
                                <a href='/read-more'>Read more</a>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container item>
                        <Grid item md={12}>
                            <p><u>Coming soon:</u></p>
                        </Grid>
                        <Grid item md={4}>pic</Grid>
                        <Grid item md={4}>pic</Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default News
