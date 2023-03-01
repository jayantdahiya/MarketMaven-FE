import React from 'react'
import PredictForm from '../Components/PredictForm'

import { StockMarket, TickerTape } from 'react-ts-tradingview-widgets'

function Landing() {
  return (
    <>
      <div className="h-screen w-screen flex">
        <div className="m-auto">
          <PredictForm />
        </div>
      </div>
      <div className="fixed bottom-0 h-[10vh] w-full bg-base-100 shadow-2xl">
        <TickerTape displayMode="compact" isTransparent={true} />
      </div>
    </>
  );
}

export default Landing