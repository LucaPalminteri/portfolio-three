import React from 'react'
import { Inter } from '@next/font/google';

const inter = Inter();

function Home() {
  return (
    <div id="home" className={inter.className}>
        <header>
            <div className="button-container">
                <button>1</button>
                <button>2</button>
            </div>
        </header>
        <div className="page-1">
            <h1 className='title'>Luca Palminteri</h1>
            <h2>Full Stack Web Developer</h2>
            <div className="button-container">
                <button className={inter.className}>Contact</button>
                <button className={inter.className}>Resume</button>
            </div>
        </div>
        <div className="page-1">
            <h1 className='title'>Section 2</h1>
        </div>
        <div className="page-1">
            <h1 className='title'>Section 3</h1>
        </div>
        <div className="page-1">
            <h1 className='title'>Section 4</h1>
        </div>
        <div className="page-1">
            <h1 className='title'>Section 5</h1>
        </div>
    </div>
  )
}

export default Home