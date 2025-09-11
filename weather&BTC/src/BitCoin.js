import React from 'react'

export default function BitCoin({usData,inData}) {
  return (
      <div className="container">
        <h3>BTC MARKET PRICE </h3>
        <div className="description">
         <h4> USA   : {usData?.last.toLocaleString("en-US")} {usData?.symbol}</h4>
          <h4> INDIA : {inData?.last.toLocaleString("en-in")} {inData?.symbol}</h4>
        </div>
      </div>
  )
}
