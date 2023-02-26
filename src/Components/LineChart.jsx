import React, { useContext } from 'react'
import Chart from 'react-apexcharts';

// import { apiData } from './API_DATA';
import { AppContext } from '../App';

function LineChart() {
    const {responseData} = useContext(AppContext);
    let chartData = JSON.parse(responseData);
    console.log('Line Chart Data: ', chartData);
    const series = [
      {
        name: "Price",
        data: Object.keys(chartData).map((key) => chartData[key].trend)
      },
    ];
    const options = {
      chart: {
        type: "line",
        zoom: {
          enabled: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: [4,4],
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Forecast Result",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 1,
        },
      },
      xaxis: {
        type: 'datetime',
        categories: Object.keys(chartData).map((key) =>
          new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }).format(chartData[key].ds)
        ),
      },
    };

    //Console logs of the api inputs/outputs

    console.log(
      "Trends: ",
      Object.keys(chartData).map((key) => chartData[key].trend)
    );
    console.log(
      "Date from api: ",
      Object.keys(chartData).map((key) => chartData[key].trend)
    );
    console.log(
      "Converted Date: ",
      Object.keys(chartData).map((key) =>
        new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }).format(chartData[key].ds)
      )
    );

  return (
    <Chart 
    type="line" 
    height='100%'
    width='100%'
    series={series}
    options={options}
     />
  )
}

export default LineChart