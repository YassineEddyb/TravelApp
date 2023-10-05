import React, { useEffect, useState, useRef, useContext } from 'react'
import "./Images.scss"

import axios from "axios";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

import useApp from '../../context/AppContext';
import ImageCard from '../PlaceCard/ImageCard';

const apiHost = "https://pixabay.com/api/";
const apiKey = "15169196-ea5f887f1bdb5d9fd3d3d234a";

function Images() {
  const [data, setData] = useState([]);
  const { query, isLoaded } = useApp();
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchImages = async () => {
    setIsLoading(true);

    try {
      console.log('fetching');
      const res = await axios.get(`${apiHost}?&key=${apiKey}&q=${query}&page=${page}`)
      setData(prevData => [...prevData, ...res.data.hits]);
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }

  useEffect (() => {
    if (!isLoaded.current) {
      fetchImages();
      isLoaded.current = true;
    }
  }, [query, isLoaded.current]);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
      return;
    }
    fetchImages();
    // isLoaded.current = true;
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  console.log(data);

  return (
    <section className='images'>
        <ResponsiveMasonry
          columnsCountBreakPoints={{350: 1, 700: 2, 1080: 3}}
        >
        <Masonry
          className="images-container"
          gutter="0.5rem" 
        >
          {data.map((item, idx) => {
            return <ImageCard key={idx} image={item.largeImageURL}/> 
          })}
        </Masonry>
        </ResponsiveMasonry>
    </section>
  )
}

export default Images;