
import React,{useState, useEffect} from "react";
import axios from "axios";
import BitCoin from "./BitCoin";
import Weather from "./Weather";

function App() {
  const APIKEY = process.env.REACT_APP_API_KEY;
  const [data,setData] = useState({});
  const [location,setLocation] = useState('');
  const [Errors , setError] = useState('');

  const [btc,setBtc] = useState(null);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${APIKEY}`
  const biturl = `https://blockchain.info/ticker`

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


  useEffect(() => {
    axios.get(biturl).then((response) => {
      setBtc({
        usData: response.data.USD,
        inData: response.data.INR
      });
    });
  },[]);


  return (
    <div className="App">
      <Weather 
      location={location}
      findLocation={findLocation}
      setLocation={setLocation} 
      Errors={Errors}
      data={data}
      />

      {btc && <BitCoin usData={btc.usData} inData={btc.inData}/>}
    </div>
  );
}
export default App;
