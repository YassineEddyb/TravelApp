import React, { useState } from 'react'
import "./ImagePopup.scss"

function ImagePopup() {
    const [visible, isVisible] = useState(true);

    return (
        <>
        {visible && 
        <div className="popup-overlay">
            <div className='popup-card'>

                <div className='img'>
                    <img src="https://pixabay.com/get/gbf36aa9765ddbaf7eee82d8254bf3400a051e4371d0ef4585fd3745612575e36347653c684a5b7c3fc8a38180e3c1878bff51c202cf5d31e070d246131b6f084_1280.jpg" alt="" />
                </div>

            </div>
        </div>}
        </>
    )
}

export default ImagePopup