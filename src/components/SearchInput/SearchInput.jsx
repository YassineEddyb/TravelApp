import React, { useState } from 'react'
import "./SearchInput.scss"

import Button from '../Button/Button'
import useApp from '../../context/AppContext'

function SearchInput() {
  const [search, setSearch] = useState('')
  const { setQuery, isLoaded } = useApp();

  const handleClick = () => {
    setQuery(search);
    isLoaded.current = false;
  }

  return (
    <div className='search-input'>
      <input 
        className='input'
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Search places, distinations and hotels' 
      />
      <input type='button' value="search" className="btn" onClick={handleClick}/>
    </div>
  )
}

export default SearchInput;