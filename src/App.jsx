// 
import { useState, useEffect } from "react";
import WeatherInput from "./components/WeatherInput";
import CurrentWeather from "./components/CurrentWeather";
import WeatherChart from "./components/WeatherChart";
import { getWeatherData } from "./services/WeatherService";
import "./App.css";

// const dummyWeatherData = {
//   current: {
//     weather: [{ description: "Cloudy" }],
//     temp: 22,
//     humidity: 45,
//     wind_speed: 19.2,
//     dt: 1718121600, // UNIX timestamp for June 10, 2024
//   },
//   daily: [
//     {
//       dt: 1718208000, // June 11, 2024
//       temp: { day: 22 },
//       humidity: 30,
//       weather: [{ description: "Cloudy" }],
//     },
//     {
//       dt: 1718294400, // June 12, 2024
//       temp: { day: 24 },
//       humidity: 36,
//       weather: [{ description: "Partly Cloudy" }],
//     },
//     {
//       dt: 1718380800, // June 13, 2024
//       temp: { day: 26 },
//       humidity: 20,
//       weather: [{ description: "Sunny" }],
//     },
//     {
//       dt: 1718467200, // June 14, 2024
//       temp: { day: 28 },
//       humidity: 15,
//       weather: [{ description: "Sunny" }],
//     },
//   ],
// };

function App() {
  const [city, setCity] = useState("Lagos");
  const [weatherData, setWeatherData] = useState(null);


 useEffect(() => {
   const fetchWeatherData = async () => {
     try {
       const data = await getWeatherData(city);
       setWeatherData(data);
     } catch (error) {
       console.error("Error fetching weather data:", error);
     }
   };

   fetchWeatherData();
 }, [city]);


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <WeatherInput city={city} setCity={setCity} />
        {weatherData && (
          <>
            <CurrentWeather weatherData={weatherData} />
            <WeatherChart forecast={weatherData.daily} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
