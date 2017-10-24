import { combineReducers } from 'redux'
import {
    RECEIVE_FILMS,
    RECEIVE_FILM_CAST,
    FILM_ID,
    RESET_SEARCH,
    RECEIVE_DIRECTOR_FILMS
  } from './actions';

function films(state = [], action) {
    switch (action.type) {
        case RECEIVE_FILMS:
            return action.films;
        case RECEIVE_DIRECTOR_FILMS:
            return action.films;
        case RESET_SEARCH:
            return [];
        default:
            return state
    }
}

function directorFilms(state = [], action){
    switch (action.type) {
        case RECEIVE_DIRECTOR_FILMS:
            return action.films;
        default:
            return state
    }
}

function filmInfo(state = {
        casts: '',
        id: 0,
        director: ''
    }, action) {
    switch (action.type) {
        case RECEIVE_FILM_CAST:
            return Object.assign({}, state, {
                casts: action.casts,
                director: action.director
            });
        case FILM_ID:
            return Object.assign({}, state, {
                id: action.id
            });

        default:
            return state
    }
}

const rootReducer = combineReducers({
  films, filmInfo, directorFilms
})

export default rootReducer;
