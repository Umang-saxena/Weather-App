
import './App.css';
import WeatherCard from './components/WeatherCard';
import WeatherState from './context/WeatherState';


function App() {
  const apikey =process.env.REACT_APP_WEATHER_KEY;  


  return (
    <>
    <WeatherState apiKey={apikey} />
    <WeatherCard apiKey={apikey} />
    </>
  );
}

export default App;
