const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getWeatherData = async (city) => {
  try {
    const currentWeatherResponse = await fetch(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    // const forecastResponse = await fetch(
    //   `${BASE_URL}/forecast/daily?q=${city}&cnt=7&appid=${API_KEY}&units=metric`
    // );

    // if (!currentWeatherResponse.ok || !forecastResponse.ok) {
    //   throw new Error("HTTP error");
    // }

    if (!currentWeatherResponse.ok) {
      throw new Error(`HTTP error ${currentWeatherResponse.status}`);
    }

    const data = await currentWeatherResponse.json();
    // const forecastData = await forecastResponse.json();

    return data;
    //   forecast: forecastData.list,
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

// export const getWeatherData = async (city) => {
//   try {
//     const response = await fetch(
//       `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
//     );

//     if (!response.ok) {
//       throw new Error(`HTTP error ${response.status}`);
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching weather data:", error);
//     throw error;
//   }
// };
