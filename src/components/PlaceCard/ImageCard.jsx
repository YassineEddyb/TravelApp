import React, {useLayoutEffect, useRef} from 'react'
import "./ImageCard.scss"

function ImageCard({item}) {

  const ref = useRef(null);

  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
  }, []);

  return (
    <div className='image-card' style={{height: `${width}`}}>
      {/* <img className='img' src={item.webformatURL} alt={item.tags} /> */}
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