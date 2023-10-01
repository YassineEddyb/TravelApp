import React from 'react'
import "./MainImage.scss"
import Image from "../../assets/background-image.jpg"

function MainImage() {
  return (
    <div className='background-image'>
      <img src={Image} />
    </div>
  )
}

export default MainImage;