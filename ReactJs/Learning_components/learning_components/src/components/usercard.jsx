import React from 'react'
import aj from '../assets/aj.jpeg'
import "./usercard.css";

const usercard = (props) => {
  return (
    <div className='user-container' style={props.style}>
      <p id='user-name'>{props.name}</p>
      <img id='user-img'src={props.image} alt="aj"></img>
      <p id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default usercard
