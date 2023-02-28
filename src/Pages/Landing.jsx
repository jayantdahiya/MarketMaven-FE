import React from 'react'
import PredictForm from '../Components/PredictForm'

import { StockMarket, TickerTape } from 'react-ts-tradingview-widgets'

function Landing() {
  return (
    <>
      <div className="relative h-screen w-screen flex">
        <div className="m-auto">
          <PredictForm />
        </div>
        <div className="absolute bottom-0 w-full bg-base-100 shadow-2xl">
          <TickerTape displayMode="compact" isTransparent={true} />
        </div>
      </div>
    </>
  );
}

export default Landing