import React, { useEffect, useState } from 'react'
import '../weather.css';
import SearchBar from './SearchBar';
import axios from 'axios';
import Forecast from './Forecast';


const WeatherCard = (props) => {
    // Destructuring props
    let { apiKey } = props;
    
    // States Used
    const [data, setData] = useState({
        city: 'bengaluru',
        temp: "",
        feel: "",
        humidity: "",
        wind: "",
        weather: "",
        search: "bengaluru",
        desc: "",
        iconcode: "",
    })
    // const [city, setCity] = useState("bengaluru");
    // const [temp, setTemp] = useState("");
    // const [feel, setFeel] = useState("");
    // const [humidity, setHumidity] = useState("");
    // const [wind, setWind] = useState("");
    // const [weather, setWeather] = useState("");
    // const [search, setSearch] = useState("bengaluru");
    // const [desc, setDesc] = useState("");
    // const [iconcode, setIconcode] = useState("");


    // const capitaliseFirst=(str)=>{

    //     //split the above string into an array of strings 
    //     //whenever a blank space is encountered

    //     const arr = str.split(" ");

    //     //loop through each element of the array and capitalize the first letter.


    //     for (var i = 0; i < arr.length; i++) {
    //         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

    //     }

    //     //Join all the elements of the array back into a string 
    //     //using a blankspace as a separator 
    //     const str2 = arr.join(" ");
    //     return str2
    // }

    //   Use Effect Hook
    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${data.search}&appid=${apiKey}&units=metric`);
                // console.log(response);
                setData({city:response.data.name
                ,temp:response.data.main.temp
                ,feel:response.data.main.feels_like
                ,humidity:response.data.main.humidity
                ,wind:response.data.wind.speed
                ,weather:response.data.weather[0].main
                ,desc:response.data.weather[0].description
                ,iconcode:response.data.weather[0].icon});

            } catch (error) {
                console.log(error);
                console.log(data);

                
            }
        }
        fetchData();
    }, [apiKey,data])



    return (
        <div className='app '>

            <SearchBar search={data.search} setsearch={setData} />
            <div className="container d-flex">
                <div className="top">
                    {/* <input type="search" name="city" id="citySearch" /> */}
                    <div className="location ">
                        <p >{data.city} </p>
                    </div>
                    <div className="temperature d-flex">
                        <h1>{data.temp}&deg;C</h1>
                        <img src={`https://openweathermap.org/img/wn/${data.iconcode}@2x.png`} alt="" /> 
                    </div>
                    <div>
                    <p>{data.desc}</p>
                    </div>
                    <div className="description">
                        <p>{data.weather}</p>
                    </div>
                </div>
                <Forecast/>
                <div className="bottom">
                    <div className="feels">
                        <h3>Feels Like</h3>
                        <p>{data.feel === 0 ? "NA" : data.feel}&deg;C</p>
                    </div>
                    <div className="humidity">
                        <h3>Humididty</h3>
                        <p>{data.humidity === 0 ? "NA" : data.humidity}%</p></div>
                    <div className="windspeed">
                        <h3>Wind Speed</h3>
                        <p>{data.wind === 0 ? "NA " : data.wind + "MPH"} </p></div>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard
