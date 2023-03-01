import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import { AppContext } from "../App";
import LineChart from '../Components/LineChart';
import { CompanyProfile } from 'react-ts-tradingview-widgets';

function Result() {
  const { ticker, setTicker, responseData } = useContext(AppContext);
  let navigate = useNavigate();

  const handleGoBack = async() => {
    setTicker('')
    navigate('/')
  }

  useEffect(() => {
    if(!ticker){
      navigate('/')
      alert('Enter a ticker first!')
    }
  }, [])
  
  if (responseData) {
    return (
      <div className="flex flex-col w-screen lg:flex-row justify-center">
        <div className="grid h-96 p-4">
          <CompanyProfile symbol={ticker} />
        </div>
        <div className="grid bg-base-100 m-4">
          <div className="flex flex-col w-full">
            <div className="grid p-2">
              <div className="card w-full bg-base-100">
                <div className="card-body">
                  <div className="card-title text-2xl">
                    Forecasted {ticker} with Prophet model
                  </div>
                  <div className="card w-full bg-base-200">
                    <div className="card-body">
                      <div className="">
                        The forecasted result is fetched from a nginx server
                        running on an AWS EC2 instance. The API is provided
                        using FastAPI. You can use the button below to test it
                        some other stock symbol ;)
                      </div>
                      <div className="card-actions justify-end align-bottom">
                        <button
                          className="btn btn-primary"
                          onClick={handleGoBack}
                        >
                          Go back
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid p-2">
              <div className="h-96 w-[80vw] lg:w-[60vw] border-2 bg-base-100 shadow-2xl m-auto">
                <LineChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center h-screen w-screen">
        <div className="h-[350px] w-[700px] border-2 my-auto flex">
          <div className="m-auto">
            <button className="btn loading disabled bg-transparent text-black border-none text-2xl lowercase">loading predictions...</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Result