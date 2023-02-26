import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import { AppContext } from "../App";
import LineChart from '../Components/LineChart';

function Result() {
  const { ticker, setResponseData, responseData } = useContext(AppContext);
  let navigate = useNavigate();

  useEffect(() => {
    if(!ticker){
      navigate('/')
      alert('Enter a ticker first!')
    }
  }, [])
  
  if (responseData) {
    return (
      <div className="flex justify-center h-screen w-screen">
        <div className="h-[350px] w-[700px] border-2 bg-base-100 shadow-2xl my-auto">
          <LineChart />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center h-screen w-screen">
        <div className="h-[350px] w-[700px] border-2 bg-base-300 shadow-2xl my-auto flex animate-pulse">
          <div className="m-auto text-black">
            Loading predictions...
          </div>
        </div>
      </div>
    );
  }
}

export default Result