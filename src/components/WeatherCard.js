import React, { useEffect, useState } from 'react'
import '../weather.css';
import SearchBar from './SearchBar';
import axios from 'axios';


const WeatherCard = (props) => {
    // Destructuring props
    let { apiKey } = props;
    // States Used
    const [city, setCity] = useState("bengaluru");
    const [temp, setTemp] = useState("");
    const [feel, setFeel] = useState("");
    const [humidity, setHumidity] = useState("");
    const [wind, setWind] = useState("");
    const [weather, setWeather] = useState("");
    const [search, setSearch] = useState("bengaluru");
    const [desc, setDesc] = useState("");
    const [iconcode, setIconcode] = useState("");


    const capitaliseFirst=(str)=>{

        //split the above string into an array of strings 
        //whenever a blank space is encountered

        const arr = str.split(" ");

        //loop through each element of the array and capitalize the first letter.


        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }

        //Join all the elements of the array back into a string 
        //using a blankspace as a separator 
        const str2 = arr.join(" ");
        return str2
    }

    //   Use Effect Hook
    useEffect(() => {
        const fetchData = async () => {

            try {
                let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric`);
                console.log(response);
                setCity(response.data.name);
                setTemp(response.data.main.temp);
                setFeel(response.data.main.feels_like);
                setHumidity(response.data.main.humidity);
                setWind(response.data.wind.speed);
                setWeather(response.data.weather[0].main);
                setDesc(response.data.weather[0].description);
                setIconcode(response.data.weather[0].icon);

            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [apiKey, search])


    return (
        <div className='app '>
            <SearchBar search={search} setsearch={setSearch} />
            <div className="container d-flex">
                <div className="top">
                    {/* <input type="search" name="city" id="citySearch" /> */}
                    <div className="location ">
                        <p >{city} </p>
                    </div>
                    <div className="temperature d-flex">
                        <h1>{temp}&deg;C</h1>
                        <img src={`https://openweathermap.org/img/wn/${iconcode}@2x.png`} alt="" /> 
                    </div>
                    <div>
                    <p>{capitaliseFirst(desc)}</p>
                    </div>
                    <div className="description">
                        <p>{weather}</p>
                    </div>
                </div>
                <div className="bottom">
                    <div className="feels">
                        <h3>Feels Like</h3>
                        <p>{feel === 0 ? "NA" : feel}&deg;C</p>
                    </div>
                    <div className="humidity">
                        <h3>Humididty</h3>
                        <p>{humidity === 0 ? "NA" : humidity}%</p></div>
                    <div className="windspeed">
                        <h3>Wind Speed</h3>
                        <p>{wind === 0 ? "NA " : wind + "MPH"} </p></div>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard
