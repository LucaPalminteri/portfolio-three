import React from 'react'
import { Inter } from '@next/font/google';
import Buttons from '../components/Buttons';
import DownArrow from '../components/DownArrow';
import Section from '../components/Section';

const inter = Inter();

function Home() {
  return (
    <div id="home" className={inter.className}>
        <header>
            <Buttons />
        </header>
        <div className="section">
            <h1 className='title'>
                <span>L</span>
                <span>u</span>
                <span>c</span>
                <span>a</span>
            </h1>
            <h2>Full Stack Web Developer</h2>
            <div className="button-container">
                <button className={inter.className}>Contact</button>
                <button className={inter.className}>Resume</button>
            </div>
            <DownArrow />
        </div>

        <Section title={"My work"} />
        <Section title={"About Me"} />
        <Section title={"Contact Me"} />
        
    </div>
  )
}

export default Home