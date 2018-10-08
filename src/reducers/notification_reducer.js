import { ADD_NOTIFICATION } from '../constants/action_constants';
  
  export default function(state = {}, action) {
    switch (action.type) {
      case ADD_NOTIFICATION:
        return Object.assign({}, state, {
          message: action.message,
          level: action.level
        });
  
      default:
        console.debug('notification reducer :: hit default', action.type);
        return state;
    }
  }