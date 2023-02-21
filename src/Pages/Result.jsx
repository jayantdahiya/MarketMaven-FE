import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../App';
import axios from 'axios';

function Result() {
  const {ticker, apiUrl} = useContext(AppContext);
  const [responseData, setResponseData] = useState();
  console.log(apiUrl)

  // const fetchPredictions = async() => {
  //   if(ticker) {
  //    var bodyData = JSON.stringify({
  //      ticker: ticker,
  //    })
  //  }

  //  var config = {
  //    method: "get",
  //    url: "https://68a5-2405-201-5801-982c-3ef8-62ff-fe06-c3d1.in.ngrok.io/Prophet?ticker=AAPL",
  //    headers: {
  //      "Access-Control-Allow-Origin": "*",
  //      "Content-Type": "application/json",
  //    },
  //  };

  //  axios(config)
  //    .then(function (response) {
  //      console.log(JSON.stringify(response.data));
  //    })
  //    .catch(function (error) {
  //      console.log(error);
  //    });
  // }

  useEffect(() => {
    fetchPredictions()
    console.log('Predicting.....')
  }, [])


  return (
    <div>
      Result
    </div>
  )
}

export default Result