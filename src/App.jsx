import { useState } from 'react'
import './App.css'
import Search from './components/Search/Search'
import Places from './components/Places/Places'
import { AppProvider } from './context/AppContext'

function App() {

  return (
    <>
      <AppProvider >
        <Search />
        <Places />
      </AppProvider>
    </>
  )
}

export default App
