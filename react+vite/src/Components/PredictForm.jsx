import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router';
import axios from "axios";

import { AppContext } from '../App';

function PredictForm() {
  const {ticker, setTicker, setResponseData} = useContext(AppContext);
  const apiUrl = import.meta.env.VITE_APP_URL;

  let navigate = useNavigate();
  const [tickerError, setTickerError] = useState(false);

  const handlePredict = () => {
    if(!ticker){
      setTickerError(true);
      alert('Please enter a valid ticker name');
    }
    fetchPredictions()
    navigate('/result')
  }

  const fetchPredictions = async () => {
    console.log("Fetch Predictions Triggered");
      if (ticker) {
        console.log("ticker found: ", ticker);
        var config = {
          method: "GET",
          url: apiUrl,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
          params: {
            ticker: ticker,
          },
        };
        try {
          console.log('Predicting....')
          await axios(config).then((response) =>
            setResponseData(response.data)
          );
          console.log('Predicted!')
        } catch (error) {
          console.log(error);
          alert(`Axios Error: ${error}`, error.data);
          navigate('/');
        }
      } else {
        console.log("Please enter a ticker symbol");
      }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-2xl">
      <div className="card-body">
        <h2 className="card-title text-2xl">Forcast your stock here!</h2>
        <p className="text-sm text-gray-600">
          Just type in your stock ticker name and select the ML model you want
          to forecast with.
        </p>
        <div className="card w-full p-4 bg-base-200 border-2 border-gray-300 shadow-xl">
          <div className="card-body">
            <input
              type="text"
              placeholder={tickerError? "Please enter ticker": "Ticker"}
              className={
                tickerError
                  ? "input input-bordered input-error w-full max-w-xs"
                  : "input input-bordered input-primary w-full max-w-xs"
              }
              onChange={(e) => setTicker(e.target.value.toUpperCase())}
            />
            <select className="select select-primary w-full max-w-xs">
              <option selected value={'prophet'}>FB Prophet</option>
            </select>
            <div className="card-actions justify-end align-bottom">
              <button className="btn btn-primary" onClick={handlePredict}>
                Predict
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PredictForm