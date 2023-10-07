import React from 'react'
import "./MainImage.scss"

function MainImage() {
  return (
    <div className='background-image'>
      <video className='video' autoPlay muted loop >
        <source src="https://player.vimeo.com/external/328428416.sd.mp4?s=39df9f60fdeaeff0f4e3fbf3c1213d395792fc43&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
       </video>
      {/* <img src="https://pixabay.com/get/g44f85245a741099fbda3c8869e905a1fd13dff87b3e8feb0b85da65a8a2954003429c3c73ef9e899f5c4be1646b829ae3a666e5c98101bebc3052c0861803973_1280.jpg" /> */}
    </div>
  )
}

export default MainImage;