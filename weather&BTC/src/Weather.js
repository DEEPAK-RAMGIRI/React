import React from 'react'

export default function Weather({location,findLocation,setLocation,Errors,data}) {
  return (
    <div className="container">
      <h3> WEATHER APP</h3>
      <div className="search">
        <input placeholder ="Enter your city" 
          value = {location}
          onKeyDown={findLocation}
          onChange={(event) => setLocation(event.target.value)}
          type = "text"
        />
      </div>
          {Errors && <p className="error">{Errors}</p>}
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
            {data.main ? (
              <>
                <div className="temp">  
                  <h1>{data.main.temp}°F</h1>
                </div>
                <div className="description">
                  <p>{data.weather[0].description}</p>
                </div>
              </>
            ) : null}
          </div>
        </div>
        {data.main && data.wind ? (
        <div className="bottom">
          <div className="feels"><p className ='bold'>{data.main.pressure} hpa</p><p>pressure </p></div>
          <div className="humidity"><p className ='bold'>{data.main.humidity} %</p><p>Humidity</p></div>
          <div className="wind"><p className ='bold'>{data.wind.speed}</p><p>MPH</p></div>
        </div>
        ):null}
      </div>  
  )
}
