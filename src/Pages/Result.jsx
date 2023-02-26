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
      <div className="h-[350px] w-[700px] border-2 bg-base-100 shadow-2xl">
        <LineChart />
      </div>
    );
  } else {
    return (
      <div className="h-[350px] w-[700px] border-2 flex justify-center bg-base-300 shadow-2xl">
        <p className="my-auto">Loading....</p>
      </div>
    );
  }
}

export default Result