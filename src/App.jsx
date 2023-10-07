import { useState } from 'react'
import './App.css'
import Search from './components/Search/Search'
import { AppProvider } from './context/AppContext'
import Images from './components/Images/Images'
import ImagePopup from './components/ImagePopup/ImagePopup'

function App() {

  return (
    <>
      <AppProvider >
        <Search />
        <Images />
        <ImagePopup />
      </AppProvider>
    </>
  )
}

export default App
