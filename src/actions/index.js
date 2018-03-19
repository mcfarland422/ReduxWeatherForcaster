const API_KEY = '07585f5dd6fb0f3cd2c318456350b4b3';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
  return {
    type: 'FETCH_WEATHER'
  };
}
