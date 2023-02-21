import React, {useState, createContext, useEffect} from 'react'
import { Route, Routes } from 'react-router';

import Background from './Components/Background'
import Landing from './Pages/Landing'
import Result from './Pages/Result'
import cors from 'cors'

export const AppContext = createContext();

function App() {
  const [theme, setTheme] = useState('corporate');
  const [ticker, setTicker] = useState();
  const apiUrl = import.meta.env.API;

  // useEffect(() => {
  //   window.process = {
  //     ...window.process,
  //   };
  // }, []);

  return (
    <div data-theme={theme} className="relative overflow-hidden h-screen">
      <div className="absolute h-screen w-screen">
        <Background />
      </div>
      <AppContext.Provider 
      value={{
        ticker,
        setTicker,
        setTheme,
        apiUrl
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