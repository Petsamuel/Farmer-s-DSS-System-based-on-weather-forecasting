const API_KEY = "802af7161aeec58e133b5ae3bdc64744";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

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

    if(!currentWeatherResponse.ok){
        throw new Error(`HTTP error ${currentWeatherResponse.status}`)
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