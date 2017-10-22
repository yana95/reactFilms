import fetch from 'isomorphic-fetch'
export const REQUEST_FILMS = 'REQUEST_FILMS'

export function requestFilms(query) {
  return {
    type: REQUEST_FILMS,
    query
  }
}

export const RECEIVE_FILMS = 'RECEIVE_FILMS'

export function receiveFilms(query, json) {
  return {
    type: RECEIVE_FILMS,
    query,
    films: json.data.children.map(child => child.data)
  }
}

export function fetchFilms(query) {
	alert();
	return dispatch => {
		dispatch(requestFilms(query));
		return fetch(`http://api.themoviedb.org/3/search/movie?api_key=0a025b55c110607482da0e613fc450d2&query=${query}`)
	        .then( json => {
	        	console.log(json);
				dispatch(receiveFilms(query, json))
	        }
	    )
	}
}