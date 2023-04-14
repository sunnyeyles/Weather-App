import axios from "axios";
import { WeatherResponse } from "./types";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

async function getWeatherByCity(city: string): Promise<WeatherResponse> {
  const response = await axios.get(API_URL, {
    params: {
      q: city,
      appid: API_KEY,
      units: "metric",
    },
  });

  return response.data;
}

// getWeatherByCity("New York").then((data) => {
//   console.log(`The temperature in ${data.name} is ${data.main.temp} °C`);
// });

export default getWeatherByCity;
