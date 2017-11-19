import { combineReducers } from 'redux'
import {
    RECEIVE_FILMS,
    RECEIVE_FILM_CAST,
    FILM_ID,
    RESET_SEARCH,
    CHANGE_SEARCH,
    CHANGE_SORT
  } from './constants';

export function films(state = [], action) {
    switch (action.type) {
        case RECEIVE_FILMS:
            return action.films;
        case RESET_SEARCH:
            return [];
        default:
            return state
    }
}

export function searchType(state = 'title', action){
    switch (action.type) {
        case CHANGE_SEARCH:
            return action.title;
        default:
            return state
    }
}

export function sortType(state = 'release date', action){
    switch (action.type) {
        case CHANGE_SORT:
            return action.title;
        default:
            return state
    }
}

export function filmInfo(state = {
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
  films, filmInfo,searchType,sortType
})

export default rootReducer;
