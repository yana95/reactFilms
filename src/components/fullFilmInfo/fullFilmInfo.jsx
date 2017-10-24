import React from 'react';
import notebookImg from './../../images/notebookImg.jpeg';
import styles from './fullFilmInfo-style';
import { connect } from 'react-redux';
import {resetSearch} from './../../actions';

const mapStateToProps = (state) => {
    return {
        filmInfo: state.filmInfo,
		films: state.films
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        resetSearch: (filmId) => dispatch(resetSearch()),
        fetchDirectorFilms: (director) => dispatch(fetchDirectorFilms(director))
    }
};

class FullFilmInfo extends React.Component {

	getFilmById(id){
		let film = this.props.films.filter( (item) => { return item.id == id});
		return film[0];
	}

	backToSearch(){
        this.props.history.push('/');
        this.props.resetSearch();
	}

	render(){
        let film = this.getFilmById(this.props.filmInfo.id);
        let releaseDate = new Date(Date.parse(film.release_date));
        return (
			<div className = 'wrapper afisha'>
				<div className = 'full-info' >
					<span className = 'logo' >netflixroulette</span>
					<a className = 'search' onClick = { () =>  this.backToSearch()  }> Search </a>
					<div className='info'>
						<div className = 'cover'>
							<img src={'https://image.tmdb.org/t/p/w500/'+ film.poster_path} />
						</div>
						<h1>{film.title}<span>{film.vote_average}</span></h1>
						<p className = 'duration'>
							<span>{releaseDate.getFullYear()}</span>
						</p>
						<p className = 'description'>{film.overview}</p>
						<div className = 'cast'>
							<p>Director: {this.props.filmInfo.director}</p>
							<p>Cast: {this.props.filmInfo.casts}</p>
						</div>
					</div>
				</div>
			</div>
        );
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(FullFilmInfo);