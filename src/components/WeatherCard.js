import React, { useEffect,useState } from 'react'
import '../weather.css';
import SearchBar from './SearchBar';
import axios from 'axios';


const WeatherCard = () => {

    const [city, setCity] = useState("bengaluru");
    const [temp, setTemp] = useState("");
    const [feel, setFeel] = useState("");
    const [humidity, setHumidity] = useState("");
    const [wind, setWind] = useState("");
    const [weather, setWeather] = useState("");

    const handleSearch = (query) => {
        // Implement your search logic here using the 'query'
        console.log(`Performing search for: ${query}`);
      };
      
      
      useEffect(() => {
          const fetchData=async()=>{
              try {
                  let response= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=bengaluru&appid=27d48ec8f418dc621fc340908fedabe3&units=metric`);
                  console.log(response.data.weather[0].main);
                  setCity(response.data.name);
                  setTemp(response.data.main.temp);
                  setFeel(response.data.main.feels_like);
                  setHumidity(response.data.main.humidity);
                  setWind(response.data.wind.speed);
                  setWeather(response.data.weather[0].main);
                  
                } catch (error) {
                    console.log(error);
                }
          }
          fetchData();
        }, []);
        // eslint-disable-next-line

    return (
        <div className='app '>
            <SearchBar onSearch={handleSearch} />
            <div className="container ">
                <div className="top">
                    {/* <input type="search" name="city" id="citySearch" /> */}
                    <div className="location ">
                        <p >{city} </p>
                    </div>
                    <div className="temperature">
                        <h1>{temp}&deg;C</h1>
                    </div>
                    <div className="description">
                        <p>{weather}</p>
                    </div>
                </div>
                <div className="bottom">
                    <div className="feels">
                        <h3>Feels Like</h3>
                        <p>{feel}&deg;C</p>
                    </div>
                    <div className="humidity">
                        <h3>Humididty</h3>
                        <p>{humidity}%</p></div>
                    <div className="windspeed">
                        <h3>Wind Speed</h3>
                        <p>{wind} MPH</p></div>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard
