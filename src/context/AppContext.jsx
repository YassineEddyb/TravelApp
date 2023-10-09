import React, { createContext, useContext, useRef, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const isFetched = useRef(false);
  const [image, setImage] = useState(null)
  const [query, setQuery] = useState('backgrounds');

  return (
    <AppContext.Provider value={{
      query,
      setQuery,
      isFetched,
      image,
      setImage
    }}>
      {children}
    </AppContext.Provider>
  );
}

export default function useApp() {
  return useContext(AppContext);
}