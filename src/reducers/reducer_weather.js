import { FETCH_WEATHER_DATA } from './../actions/index';

export default function(state= [], action ){
    switch (action.type){
        case FETCH_WEATHER_DATA:
            return [action.payload.data, ...state];
            //syntax concats the action.payload.data with the previously present state
        default:
        break;
    }

    return state;
}