import { useState } from 'react'
import WeatherChart from './components/WeatherChart';
import './App.css'

const dummyWeatherData = {
  current: {
    weather: [{ description: "Cloudy" }],
    temp: 22,
    humidity: 45,
    wind_speed: 19.2,
    dt: 1606137900,
  },
  daily: [
    {
      dt: 1606137900,
      temp: { day: 22 },
      humidity: 30,
      weather: [{ description: "Cloudy" }],
    },
    {
      dt: 1606224300,
      temp: { day: 24 },
      humidity: 36,
      weather: [{ description: "Partly Cloudy" }],
    },
    {
      dt: 1606310700,
      temp: { day: 26 },
      humidity: 20,
      weather: [{ description: "Sunny" }],
    },
    {
      dt: 1606397100,
      temp: { day: 28 },
      humidity: 15,
      weather: [{ description: "Sunny" }],
    },
  ],
};


function App() {

  const [city, setCity] = useState('Lagos');
  const weatherData = dummyWeatherData;

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <div className="mb-4">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city name"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          {weatherData && (
            <div>
              <h2 className="text-2xl font-bold mb-4">
                {weatherData.current.weather[0].description}
              </h2>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-6xl">
                    {Math.round(weatherData.current.temp)}°C
                  </div>
                  <div>
                    {new Date(
                      weatherData.current.dt * 1000
                    ).toLocaleDateString()}
                  </div>
                </div>
                <div>
                  <div>Humidity: {weatherData.current.humidity}%</div>
                  <div>Wind Speed: {weatherData.current.wind_speed} m/s</div>
                </div>
              </div>
              <WeatherChart forecast={weatherData.daily} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App
