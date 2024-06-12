import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Chart from "chart.js/auto";

const WeatherChart = ({ forecast = [] }) => {
  const chartRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const data = {
      labels: forecast.map((day) =>
        new Date(day.dt * 1000).toLocaleDateString()
      ),
      datasets: [
        {
          label: "Temperature",
          data: forecast.map((day) => day.temp.day),
          borderColor: "rgba(75,192,192,1)",
          backgroundColor: "rgba(75,192,192,0.2)",
        },
      ],
    };

    const config = {
      type: "line",
      data: data,
      options: {},
    };

    chartRef.current = new Chart(canvasRef.current, config);

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [forecast]);

  return <canvas ref={canvasRef} id="weather-chart"></canvas>;
};



//Specifying proptypes
WeatherChart.propTypes = {
  forecast: PropTypes.arrayOf(
    PropTypes.shape({
      dt: PropTypes.number.isRequired,
      temp: PropTypes.shape({
        day: PropTypes.number.isRequired,
      }).isRequired,
      humidity: PropTypes.number,
      weather: PropTypes.arrayOf(
        PropTypes.shape({
          description: PropTypes.string,
        })
      ),
    })
  ).isRequired,
};

export default WeatherChart;
