import React,{useState} from "react";
import axios from "axios";

function App() {
  const APIKEY = process.env.REACT_APP_API_KEY;
  const [data,setData] = useState({});
  const [location,setLocation] = useState('');
  const [Errors , setError] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${APIKEY}`

  const findLocation = (event) =>{
    if (event.key === "Enter"){
      axios.get(url).then(function (response){
        setData(response.data);
      }).catch(function (error) {
        setData({});
        setError("City Not Found");
  })
      setError("");
      setLocation("");
    }
  }
  return (
    <div className="App">
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
    </div>
  );
}
export default App;
