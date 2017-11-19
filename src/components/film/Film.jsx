import React from 'react';
import ReactDom from 'react-dom';
import styles from './film-style';
import {fetchFilmCast, filmInfo} from './actionsFilm';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFilmCast: (filmId) => dispatch(fetchFilmCast(filmId)),
        filmInfo: (filmId) => dispatch(filmInfo(filmId)),
    }
};

class Film extends React.Component{

	showInfo(title, id){
		this.props.history.push('/film/' + title);
		this.props.fetchFilmCast(id);
		this.props.filmInfo(id);
	}

	render(){
		let releaseDate = new Date(Date.parse(this.props.film.release_date));
		return (
			<div className = 'film' onClick = { () => this.showInfo(this.props.film.title, this.props.film.id) } >
				<img src={'https://image.tmdb.org/t/p/w500/'+ this.props.film.poster_path} />
				<div className = 'info'>
					<span className = 'release'>{releaseDate.getFullYear()}</span>
					<p className = 'title'>{this.props.film.title}</p>
				</div>
			</div>
		);
	}
}

export default connect(null, mapDispatchToProps)(Film);