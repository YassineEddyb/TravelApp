import React, { useState } from 'react'
import "./ImagePopup.scss"

import UserCard from "../UserCard/UserCard"
import {BsFillSuitHeartFill} from "react-icons/bs"
import {AiOutlineClose} from "react-icons/ai"
import useApp from '../../context/AppContext';

function formatNumber(number)
{
    return String(number).replace(/(.)(?=(\d{3})+$)/g,'$1,')
}

function ImagePopup() {
    const { image, setImage } = useApp();

    console.log("image: ", image);

    return (
        <>
        {image && 
        <div className="popup-overlay">
            <div className='popup-card'>
                <div className='top-info'>
                    <UserCard userImage={image.userImageURL} userName={image.user}/>
                    <div className="close-btn" onClick={() => {setImage(null)}}>
                        <AiOutlineClose size={20}/>
                    </div>
                </div>
                <div className='img'>
                    <img src={image.largeImageURL} alt="" />
                </div>
                <div className='bottom-info'>
                    <div className='more-info'>
                        <div className='info'>
                            <span> Views </span>
                            <span> {formatNumber(image.views)} </span>
                        </div>
                        <div className='info'>
                            <span> Likes </span>
                            <span> {formatNumber(image.likes)} </span>
                        </div>
                        <div className='info'>
                            <span> Downloads </span>
                            <span> {formatNumber(image.downloads)} </span>
                        </div>
                    </div>
                    <div className='buttons'>
                        <div className='like-btn'>
                            <BsFillSuitHeartFill size={18}/>                
                        </div>
                        <a className='download-btn' href=''>Download</a>
                    </div>
                </div>
            </div>
        </div>}
        </>
    )
}

export default ImagePopup