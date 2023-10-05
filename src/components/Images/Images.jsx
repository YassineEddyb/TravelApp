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
      setData(res.data.hits);
      setPage(1);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }

  const fetchImagesOnScroll = async () => {
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
    // Get the current scroll position
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Get the total height of the document
    var documentHeight = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );

    // Get the height of the window
    var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    // Calculate the distance from the bottom of the window to the bottom of the document
    var distanceFromBottom = documentHeight - (scrollTop + windowHeight);

    // Check if the distance from the bottom is less than or equal to a threshold (e.g., 10 pixels)
    if (distanceFromBottom <= 10) {
      console.log("fetch image on scroll")
      fetchImagesOnScroll()
    }

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