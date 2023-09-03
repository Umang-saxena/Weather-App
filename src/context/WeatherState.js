import React,{useEffect} from 'react'
import WeatherContext from "./weatherContext"
import axios from 'axios';

const WeatherState = (props) => {
  const {apiKey}=props;

  const forecastFetch = async () => {
    try {
        let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=${apiKey}&units=metric`);
        console.log(response.data.weather);

    } catch (error) {
        console.log(error);
        
    }}
    useEffect(() => {
      //eslint-disable-next-line 
      forecastFetch();
    }, [])
    
  return (
    <WeatherContext.Provider value={{forecastFetch}}>
      {props.children}
    </WeatherContext.Provider>
  )
}

export default WeatherState;
