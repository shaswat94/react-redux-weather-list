import axios from 'axios';

const API_KEY= 'e38919efc05e7e257a1bd8b465a07498';
const FETCH_WEATHER= 'FETCH_WEATHER';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?q=`;

export function fetchWeather(city){
    const url = `${ROOT_URL}${city},us&appid=${API_KEY}`;
    const request = axios.get(url);
    
    return{
        type: FETCH_WEATHER,
        payload: request
    };
}
