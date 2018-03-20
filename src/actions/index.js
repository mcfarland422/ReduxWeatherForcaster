import axios from 'axios';

const API_KEY = '07585f5dd6fb0f3cd2c318456350b4b3';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// 1. User submits a city, calls this action creator fetchWeather
export function fetchWeather(city) {  // 2. passes in the city
  const url = `${ROOT_URL}&q=${city},us`; // 3. craft URL with the City
  const request = axios.get(url); // 4. Make Ajax request with Axios
  // A promise is returned, request

  return {
    type: FETCH_WEATHER,
    payload: request // the promise is returned as 'payload'
  };
}
