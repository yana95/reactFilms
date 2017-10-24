import axios from 'axios'
export const RECEIVE_FILMS = 'RECEIVE_FILMS';
export const RECEIVE_DIRECTOR_FILMS = 'RECEIVE_DIRECTOR_FILMS';
export const RECEIVE_FILM_CAST = 'RECEIVE_FILM_CAST';
export const FILM_ID = 'FILM_ID';
export const RESET_SEARCH = 'RESET_SEARCH';

export function receiveFilms(query, response) {
    console.log(response.data.results);
  return {
    type: RECEIVE_FILMS,
    query,
    films: response.data.results
  }
}

export function receiveDirectorFilms( response) {
    return {
        type: RECEIVE_DIRECTOR_FILMS,
        films: response.data.results
    }
}

export function resetSearch() {
    return {
        type: RESET_SEARCH,
    }
}

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


export function fetchFilms(query) {
	return (dispatch) => {
		axios.get(`http://api.themoviedb.org/3/search/movie?api_key=0a025b55c110607482da0e613fc450d2&query=${query}`)
	        .then( (response) => {
				dispatch(receiveFilms(query, response));
	        }
	    );
	}
}

export function fetchFilmCast(movieId) {
    return (dispatch) => {
        axios.get(`http://api.themoviedb.org/3/movie/${movieId}/credits?api_key=0a025b55c110607482da0e613fc450d2`)
            .then( (response) => {
                    dispatch(receiveFilmCast( response));
                }
            );

    }
}

export function fetchDirectorFilms(director) {
    return (dispatch) => {
        axios.get(`http://api.themoviedb.org/3/discover/movie?director=${director}&api_key=0a025b55c110607482da0e613fc450d2`)
            .then( (response) => {
                    dispatch(receiveDirectorFilms(response));
                }
            );
    }
}