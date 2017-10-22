import { combineReducers } from 'redux'
import {
  REQUEST_FILMS,
  RECEIVE_FILMS 
} from './actions';

function films(state = {
  films: []
}, action) {
  switch (action.type) {
    case REQUEST_FILMS:
      return Object.assign({}, state, {
      });
    case RECEIVE_FILMS:
      return Object.assign({}, state, {
        films: action.films
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  films
})

export default rootReducer;
