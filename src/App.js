
import './App.css';
import WeatherCard from './components/WeatherCard';

function App() {
  const apikey =process.env.REACT_APP_WEATHER_KEY;  
  return (
    <> 
    <WeatherCard apiKey={apikey} />
    </>
  );
}

export default App;
