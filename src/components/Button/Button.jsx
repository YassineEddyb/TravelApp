import React from 'react'
import "./Button.scss"

function Button({onClick}) {
  return (
    <button className="btn" onClick={onClick}>Search</button>
  )
}

export default Button;