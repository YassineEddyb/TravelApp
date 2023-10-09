import React, {useEffect, useLayoutEffect, useRef, useState} from 'react'
import "./ImageCard.scss"
import UserCard from '../UserCard/UserCard';

function ImageCard({item, onClick}) {

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
      onClick={onClick}
    >
      <img className='img' src={item.webformatURL} alt={item.tags} />
      <div className='overlay'>
        {/* <span className='tags'>{item.tags}</span> */}
        <UserCard userImage={item.userImageURL} userName={item.user}/>
      </div>
    </div>
  )
}

export default ImageCard;