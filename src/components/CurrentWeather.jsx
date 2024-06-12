import PropTypes from "prop-types";

const CurrentWeather = (props) => {
 const { weather, main, wind, dt } = props.weatherData;
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{weather[0].description}</h2>
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
