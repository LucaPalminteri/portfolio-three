'use client'

import React, {useState, useEffect} from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function DownArrow() {

    const [scrollPosition, setScrollPosition] = useState(0)

    let styleArrow = {}

    useEffect(() => {
        const handleScroll = () => {
          setScrollPosition(window.pageYOffset);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    if(scrollPosition >= 100) {
        console.log("dafwedf")
        styleArrow = {
            color: 'transparent',
            transitionDuration: '.3s'
        }
    }

    
  return (
    <div className='down-arrow' style={styleArrow}><KeyboardArrowDownIcon fontSize='large'/></div>
  )
}

export default DownArrow