import React, { createContext, useContext, useRef, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const isLoaded = useRef(false);
  const [query, setQuery] = useState('random');

  console.log(query)

  return (
    <AppContext.Provider value={{
      query,
      setQuery,
      isLoaded
    }}>
      {children}
    </AppContext.Provider>
  );
}

export default function useApp() {
  return useContext(AppContext);
}