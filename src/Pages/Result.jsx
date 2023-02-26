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
        <div className="h-[350px] w-[700px] border-2 shadow-2xl my-auto flex bg-base-200">
          <div className="m-auto">
            <button className="btn loading disabled bg-base-200 text-black border-none">loading predictions...</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Result