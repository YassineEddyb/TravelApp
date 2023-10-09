import React, { useState } from 'react'
import "./ImagePopup.scss"

import UserCard from "../UserCard/UserCard"

function ImagePopup() {
    const [visible, isVisible] = useState(true);

    return (
        <>
        {visible && 
        <div className="popup-overlay">
            <div className='popup-card'>
                <div className='top-info'>
                    <UserCard userImage="" userName="osheeen"/>
                </div>
                <div className='img'>
                    <img src="https://pixabay.com/get/ge336184390b3f7a756e96c14294eced1476c26546c93c19f730e58c0b724408bdf3412ea4b033c643ef83014d49ffe0a45857f25cdaccb567b66a676230ad070_1280.jpg" alt="" />
                </div>
                <div className='bottom-info'></div>
            </div>
        </div>}
        </>
    )
}

export default ImagePopup