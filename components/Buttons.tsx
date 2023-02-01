'use client'

import React, {useState} from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenIcon from '@mui/icons-material/Fullscreen';

function Buttons() {

    const [theme, setTheme] = useState(false)

    function toggleTheme() {
        console.log("change theme")
        if (!theme) {
            document.body.style.backgroundColor = '#111'
            document.body.style.color = '#FFF'
            document.body.style.transitionDuration = '1s'
            setTheme(prev => !prev)
        }
        else {
            document.body.style.backgroundColor = '#FAFAFA'
            document.body.style.color = '#111'

            setTheme(prev => !prev)
        }
    }

    function toggleScreenSize() {
        console.log("change screen size")
        if(document.fullscreenElement == null) {
            document.body.requestFullscreen()
            document.body.style.overflow = 'auto'
        }
        else {
            document.exitFullscreen()
        }
    }

  return (
    <div className="header-button-container">
        <button
            onClick={() => toggleTheme()}
        ><DarkModeIcon/></button>
        <button
            onClick={() => toggleScreenSize()}
        ><FullscreenIcon/></button>
    </div>
  )
}

export default Buttons