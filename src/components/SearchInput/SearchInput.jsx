import React from 'react'
import "./SearchInput.scss"

import Button from '../Button/Button'

function SearchInput() {
  return (
    <div className='search-input'>
      <input 
        className='input'
        type='text'
        placeholder='Search places, distinations and hotels' 
      />
      <Button className="btn"/>
    </div>
  )
}

export default SearchInput