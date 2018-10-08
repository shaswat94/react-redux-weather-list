import axios from 'axios';
import { ADD_NOTIFICATION } from '../constants/action_constants';

const API_KEY= 'e38919efc05e7e257a1bd8b465a07498';
export const FETCH_WEATHER_DATA= 'FETCH_WEATHER_DATA';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?q=`;

export default function fetchWeather(city){
    const url = `${ROOT_URL}${city},us&appid=${API_KEY}`;
    const request = axios.get(url);
    return{
        type: FETCH_WEATHER_DATA,
        payload: request
    };
}

export function addNotification(message, level) {
  return {
    type: ADD_NOTIFICATION,
    message,
    level
  };
}

