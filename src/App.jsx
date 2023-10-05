import { useState } from 'react'
import './App.css'
import Search from './components/Search/Search'
import { AppProvider } from './context/AppContext'
import Images from './components/Images/Images'

function App() {

  return (
    <>
      <AppProvider >
        <Search />
        <Images />
      </AppProvider>
    </>
  )
}

export default App
