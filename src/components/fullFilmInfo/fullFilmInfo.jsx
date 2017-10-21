import React from 'react';
import notebookImg from './../../images/notebookImg.jpeg';
import styles from './fullFilmInfo-style';
function FullFilmInfo (props){
	return (
		<div className = 'wrapper afisha'>
			<div className = 'full-info' >
				<span className = 'logo' >netflixroulette</span>
				<a className = 'search' onClick = { () => { props.history.push('/') } }> Search </a>
				<div className='info'>
					<div className = 'cover'>
						<img src={notebookImg} />
					</div>
					<h1>{props.film.title}<span>{props.film.rating}</span></h1>
					<p className = 'duration'>
						<span>{props.film.year}</span>
						<span>{props.film.duration}</span>
					</p>
					<p className = 'description'>{props.film.description}</p>
					<div className = 'cast'>
						<p>Director:{props.film.director}</p>
						<p>Cast: {props.film.cast}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FullFilmInfo;