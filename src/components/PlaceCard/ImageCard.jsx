import React from 'react'
import "./ImageCard.scss"

function ImageCard({image}) {

  return (
    <img className='image-card' src={image} alt="" />
  )
}

export default ImageCard;