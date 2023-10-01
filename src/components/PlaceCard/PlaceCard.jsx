import React from 'react'
import "./PlaceCard.scss"


import Image from "../../assets/background-image.jpg"

function PlaceCard({image, tripName}) {

  return (
    <img className='image-card' src={image} alt="" />
  )
}

export default PlaceCard;