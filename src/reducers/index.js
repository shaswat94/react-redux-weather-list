import { combineReducers } from 'redux';
import  WeatherReducer   from './reducer_weather';
import notification from './notification_reducer';

export default combineReducers({
  weather: WeatherReducer,
  notification
});