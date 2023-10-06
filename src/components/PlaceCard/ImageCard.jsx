import React from 'react'
import "./ImageCard.scss"

function ImageCard({image, item}) {

  return (
    <div className='image-card'>
      <img className='img' src={image} alt={item.tags} />
      <div className='overlay'>
        {/* <span className='tags'>{item.tags}</span> */}
        <div className='user'>
          <div className='user-img'>
            <img src={item.userImageURL} alt="" />
          </div>
          <span className='username'>{item.user}</span>
        </div>
      </div>
    </div>
  )
}

export default ImageCard;