import React from 'react'
import About from '../../components/About'
import Header from '../../components/Header'
import Opinion from '../../components/Opinion'
import Schedule from '../../components/Schedule'
import Skill from '../../components/Skill'

function Home() {
    return (
        <div>
            <Header/>
            <Skill/>
            <About/>
            <Schedule/>
            <Opinion/>
        </div>
    )
}

export default Home
