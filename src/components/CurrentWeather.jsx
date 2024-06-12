import PropTypes from "prop-types";

const CurrentWeather = (props) => {
  const weatherData = props.weatherData;
  return (
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
            {new Date(weatherData.current.dt * 1000).toLocaleDateString()}
          </div>
        </div>
        <div>
          <div>Humidity: {weatherData.current.humidity}%</div>
          <div>Wind Speed: {weatherData.current.wind_speed} m/s</div>
        </div>
      </div>
    </div>
  );
};

//Specifying proptypes
CurrentWeather.propTypes = {
  weatherData: PropTypes.arrayOf(
    PropTypes.shape({
      dt: PropTypes.number.isRequired,
      temp: PropTypes.shape({
        day: PropTypes.number.isRequired,
      }).isRequired,
      humidity: PropTypes.number,
      wind_speed:PropTypes.number,
      weather: PropTypes.arrayOf(
        PropTypes.shape({
          description: PropTypes.string,
        })
      ),
    })
  ).isRequired,
};

export default CurrentWeather;
