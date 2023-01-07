import React from 'react'
import "./Mov.css"

function Mov(props) {
  return (
    <div className="movie">
      <img src={props.src} alt={props.alt} id='image'/>
      <span id='movieName'>{props.name}</span>
    </div>
  )
}

export default Mov