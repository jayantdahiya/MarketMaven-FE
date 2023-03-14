import React, {useState, createContext, useEffect} from 'react'
import { Route, Routes } from 'react-router';

import bg from './assets/SVG/circuit-board.svg'
import Landing from './Pages/Landing'
import Result from './Pages/Result'

export const AppContext = createContext();

function App() {
  const [theme, setTheme] = useState('corporate');
  const [ticker, setTicker] = useState();
  const [responseData, setResponseData] = useState();
  const [model, setModel] = useState('Prophet');
  return (
    <div
      data-theme={theme}
      className="relative overflow-hidden h-screen"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <AppContext.Provider
        value={{
          ticker,
          setTicker,
          model,
          setModel,
          setTheme,
          responseData,
          setResponseData,
        }}
      >
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App