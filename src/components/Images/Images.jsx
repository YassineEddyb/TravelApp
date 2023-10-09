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
  const { query, isFetched, setImage } = useApp();
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchImages = async () => {
    setIsLoading(true);

    try {
      console.log('fetching');
      setData([]);
      const res = await axios.get(`${apiHost}?&key=${apiKey}&q=${query}&page=${1}&safesearch=true`)
      setData(res.data.hits);
      setPage(2);
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
      setPage(prevPage => prevPage + 1);
      const res = await axios.get(`${apiHost}?&key=${apiKey}&q=${query}&page=${page}&safesearch=true`)
      setData(prevData => [...prevData, ...res.data.hits]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }

  useEffect (() => {
    if (!isFetched.current) {
      fetchImages();
      isFetched.current = true;
    }
  }, [query, isFetched.current]);

  const handleScroll = () => {
    if (!isLoading) {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );

      var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      var distanceFromBottom = documentHeight - (scrollTop + windowHeight);

      if (distanceFromBottom <= 10) {
        console.log("fetch image on scroll")
        fetchImagesOnScroll()
      }
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
            return <ImageCard key={idx} item={item} onClick={(item) => setImage(item)}/> 
          })}
        </Masonry>
        </ResponsiveMasonry>
    </section>
  )
}

export default Images;