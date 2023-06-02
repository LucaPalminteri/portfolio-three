import React from 'react'

function Section({title}:{title:string}) {
  return (
    <div className="section">
        <h1 className='title'>{title}</h1>
    </div>
  )
}

export default Section