import React, {useState, createContext, useEffect} from 'react'
import { Route, Routes } from 'react-router';

import Landing from './Pages/Landing'
import Result from './Pages/Result'

export const AppContext = createContext();

function App() {
  const [theme, setTheme] = useState('corporate');
  const [ticker, setTicker] = useState();
  const [responseData, setResponseData] = useState();

  return (
    <div data-theme={theme} className="relative overflow-hidden h-screen">
      <AppContext.Provider 
      value={{
        ticker,
        setTicker,
        setTheme,
        responseData,
        setResponseData
      }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App