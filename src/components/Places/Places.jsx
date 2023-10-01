import React, { useEffect, useState, useRef, useContext } from 'react'
import "./Places.scss"

import axios from "axios";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

import PlaceCard from '../PlaceCard/PlaceCard';
import useApp from '../../context/AppContext';

const apiHost = "https://pixabay.com/api/";
const apiKey = "15169196-ea5f887f1bdb5d9fd3d3d234a";
const method = "flickr.photos.search";

const picApi = "https://live.staticflickr.com/7372/53115554787_16ff5cb975_w.jpg?_accept=application%2Fx-msgpack"

function Places() {
  const [data, setData] = useState([]);
  const { query, isLoaded } = useApp();

  const fetchPlaces = async () => {
    try {
      console.log('fetching');
      const res = await axios.get(`${apiHost}?&key=${apiKey}&q=${query}`)
      setData(res.data.hits);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect (() => {
    if (!isLoaded.current) {
      fetchPlaces();
      isLoaded.current = true;
    }
  }, [query, isLoaded.current])

  console.log(data);

  return (
    <section className='places'>
        <ResponsiveMasonry
          columnsCountBreakPoints={{350: 1, 700: 2, 1080: 3}}
        >
        <Masonry
          className="places-container"
          gutter="0.5rem" 
        >
          {data.map((item, idx) => {
            return <PlaceCard key={idx} image={item.largeImageURL}/> 
          })}
        </Masonry>
        </ResponsiveMasonry>
    </section>
  )
}

export default Places;