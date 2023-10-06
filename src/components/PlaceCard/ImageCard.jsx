import React, {useEffect, useLayoutEffect, useRef, useState} from 'react'
import "./ImageCard.scss"

function ImageCard({item}) {

  const ref = useRef(0);

  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
  }, []);

  const handleResize = () => {
    setWidth(ref.current.offsetWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='image-card' ref={ref}
      style={{height: `${(width / item.webformatWidth) * item.webformatHeight}px`}}
    >
      <img className='img' src={item.webformatURL} alt={item.tags} />
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