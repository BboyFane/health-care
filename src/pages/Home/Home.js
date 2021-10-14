import React from 'react'
import About from '../../components/About'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import News from '../../components/News'
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
            <News/>
            <Footer/>
        </div>
    )
}

export default Home
