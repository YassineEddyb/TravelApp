import React from 'react'
import "./ImageCard.scss"

function ImageCard({image, item}) {

  return (
    <img className='image-card' src={image} alt={item.tags} />
  )
}

export default ImageCard;