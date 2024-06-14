import PropTypes from "prop-types";
import weatherIcons from "../store/data.json"
// import cloudyIcon from "../assets/icons/cloudy.svg"; 
// import rainIcon from "../assets/icons/rain.svg"
// import clearIcon from "../assets/icons/clear-day.svg"


const CurrentWeather = (props) => {
  const { weather, main, wind, dt } = props.weatherData;
  // const weatherIconMap = {
  //   Clouds: cloudyIcon,
  //   Rain: rainIcon,
  //   Clear: clearIcon,
    
  //  
  // };

  const weatherDescription = weather[0].description;
  const weatherMain = weather[0].main;
  const weatherIcon = weatherIcons[weatherMain] || weatherIcons['Clear']; // Fallback to a default icon if not mapped

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        {weatherDescription}
        <img
          src={weatherIcon}
          alt={weatherDescription}
          className="w-8 h-8 ml-2"
        />
      </h2>
      <div className="flex justify-between items-center">
        <div>
          <div className="text-6xl">{Math.round(main.temp)}°C</div>
          <div>{new Date(dt * 1000).toLocaleDateString()}</div>
        </div>
        <div>
          <div>Humidity: {main.humidity}%</div>
          <div>Wind Speed: {wind.speed} m/s</div>
        </div>
      </div>
    </div>
  );
};

CurrentWeather.propTypes = {
  weatherData: PropTypes.shape({
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string.isRequired,
        main: PropTypes.string.isRequired,
      })
    ).isRequired,
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number.isRequired,
    }).isRequired,
    dt: PropTypes.number.isRequired,
  }).isRequired,
};

export default CurrentWeather;
