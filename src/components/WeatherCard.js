import React from 'react'
import '../weather.css';

const WeatherCard = () => {
    return (
        <div className='app '>
            <div className="container ">
                <div className="top">
                    {/* <input type="search" name="city" id="citySearch" /> */}
                <div className="location ">
                    <p >Delhi</p>
                </div>
                <div className="temperature">
                    <h1>65 F</h1>
                </div>
                <div className="description">
                    <p>Clouds</p>
                </div>
                </div>
                <div className="bottom">
                    <div className="feels"><p>65 C</p> </div>
                    <div className="humidity"><p>40%</p></div>
                    <div className="windspeed"> <p>230 MPH</p></div>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard
