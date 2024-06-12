import PropTypes from "prop-types";

const WeatherInput = (props) => {
  const city = props.city;
  const setCity = props.setCity;
  return (
    <div className="mb-4">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>
  );
};

//Specifying proptypes
WeatherInput.propTypes = {
  city: PropTypes.string.isRequired,
  setCity: PropTypes.func.isRequired
};

export default WeatherInput;
