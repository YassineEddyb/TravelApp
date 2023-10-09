import React from 'react'
import "./UserCard.scss"

function UserCard({userImage, userName}) {
  return (
    <div className='user'>
        <div className='user-img'>
        <img src={userImage} alt="" />
        </div>
        <span className='username'>{userName}</span>
    </div>
  )
}

export default UserCard