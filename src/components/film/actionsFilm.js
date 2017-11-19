import {TMDB_URL} from './../../constants';
import {API_KEY} from './../../constants';
import axios from 'axios'
import {
    RECEIVE_FILM_CAST,
    FILM_ID
  } from './../../constants';

export function filmInfo(id) {
    return {
        type: FILM_ID,
        id: id
    }
}

export function receiveFilmCast(response) {
    let casts = response.data.cast;
    let crew = response.data.crew;
    var castsStr = '';
    for(let i=0; i < 10; i++){
        castsStr+= casts[i].name + ', ';
    }
    let director = crew.filter( (item) => {return item.job == 'Director'} );
    return {
        type: RECEIVE_FILM_CAST,
        casts: castsStr,
        director: director[0].name
    }
}

export function fetchFilmCast(movieId) {
    return (dispatch) => {
        axios.get(`${TMDB_URL}movie/${movieId}/credits?${API_KEY}`)
            .then( (response) => {
                    dispatch(receiveFilmCast( response));
                }
            );

    }
}