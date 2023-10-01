import React from 'react'
import "./Search.scss"

import MainImage from '../MainImage/MainImage'
import SearchInput from '../SearchInput/SearchInput'

function Search() {
  return (
    <div className='search'>
      <MainImage />

      <div className='content'>
        {/* <h1>Explore the world with a smile :)</h1> */}
        <h1>The whole world awaits.</h1>
        <SearchInput />
      </div>

    </div>
  )
}

export default Search