import {TMDB_URL} from './../../constants';
import {API_KEY} from './../../constants';
import axios from 'axios'
import {
    RECEIVE_FILMS
  } from './../../constants';

export function fetchFilms(query) {
	return (dispatch) => {
		axios.get(`${TMDB_URL}search/movie?${API_KEY}&query=${query}`)
	        .then( (response) => {
				dispatch(receiveFilms(query, response));
	        }
	    );
	}
}

export function receiveFilms(query, response) {
  return {
    type: RECEIVE_FILMS,
    query,
    films: response.data.results
  }
}
