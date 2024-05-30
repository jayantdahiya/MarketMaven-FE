import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AppContext } from "../App";
import LineChart from "../Components/LineChart";

// import {apiData} from '../Components/API_DATA';

function Result() {
  const { ticker, model, setTicker, responseData, setResponseData } =
    useContext(AppContext);
  let navigate = useNavigate();

  const handleGoBack = async () => {
    setTicker("");
    setResponseData("");
    navigate("/");
  };

  useEffect(() => {
    if (!ticker) {
      // setResponseData(apiData)
      navigate("/");
    }
  }, []);

  if (responseData) {
    return (
      <div className="flex w-screen">
        <div className="mx-auto p-8 w-full md:w-2/5 lg:w-3/5">
          <div className="bg-base-100 border-2 shadow-xl p-4">
            <div className="h-[35vh]">
              <LineChart />
            </div>
            <div className="text-lg font-bold border-t p-4">
              <p>How is it forecasting this output?</p>
            </div>
            <div className="p-8 text-md text-gray-600">
              <ul className="list-disc space-y-3">
                <li>
                  <p>
                    The input {ticker} and {model} as used as params and an
                    axios get request is made on the server.
                  </p>
                </li>
                <li>
                  <p>
                    The server is exposed using Cloudflare Tunnel on
                    localhost:8000. Port 8000 is running FastAPI application.
                  </p>
                </li>
                <li>
                  <p>
                    The python code then fetches the ticker history using
                    yfinance API. Then the selected model is trained on the
                    result with cleaned yfinance history data.
                  </p>
                </li>
                <li>
                  <p>
                    Then the model predicts by taking 7 days in future from
                    today's date as input.
                  </p>
                </li>
                <li>
                  <p>The FastAPI then returns the predicted result in JSON.</p>
                </li>
              </ul>
            </div>
            <div className="text-right">
              <button
                className="btn btn-primary text-white"
                onClick={handleGoBack}
              >
                Go Back
              </button>
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
            <button className="btn loading disabled bg-transparent text-black border-none text-2xl lowercase">
              loading predictions...
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Result;
