import axios from "axios";
import { WeatherResponse } from "./types";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = "https://api.openweathermap.org/data/2.5/weather";


// custom hook to fetch data from weather API
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

export default getWeatherByCity;
