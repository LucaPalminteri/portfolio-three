'use client'

import React, {useEffect, useState} from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenIcon from '@mui/icons-material/Fullscreen';

function Buttons() {

    const [theme, setTheme] = useState(false)

    useEffect(() => {
      let themeLocalStorage = localStorage.getItem('theme')

      if (themeLocalStorage == '0') {
        setTheme(false)
      }
      else {
        setTheme(true)
      }

      toggleTheme()
    }, [])
    


    function toggleTheme() {
        if (!theme) {
            document.body.style.backgroundColor = '#111'
            document.body.style.color = '#FFF'
            document.body.style.transitionDuration = '1s'
            setTheme(prev => !prev)
            localStorage.setItem('theme','0')
        }
        else {
            document.body.style.backgroundColor = '#FAFAFA'
            document.body.style.color = '#111'
            setTheme(prev => !prev)
            localStorage.setItem('theme','1')
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