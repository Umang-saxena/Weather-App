import React from 'react'
import WeatherContext from "./weatherContext"

const WeatherState = (props) => {

  const fetchData = async (props) => {
    try {
        let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric`);
        // console.log(response);
        props.setCity(response.data.name);
        setTemp(response.data.main.temp);
        setFeel(response.data.main.feels_like);
        setHumidity(response.data.main.humidity);
        setWind(response.data.wind.speed);
        setWeather(response.data.weather[0].main);
        setDesc(response.data.weather[0].description);
        setIconcode(response.data.weather[0].icon);

    } catch (error) {
        alert("Incorrect Input");
        
    }}

  return (
    <WeatherContext.Provider value={{fetchData}}>
      {props.children}
    </WeatherContext.Provider>
  )
}

export default WeatherState;
