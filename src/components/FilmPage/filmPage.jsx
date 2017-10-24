import React from 'react';

import FullFilmInfo from './../fullFilmInfo/fullFilmInfo';
import Films from './../films/Films';
import notebookImg from './../../images/notebookImg.jpeg';

function FilmPage(props){
	return (
		<div className="film-info">
			<FullFilmInfo {...props} />
			<Films/>
		</div>
	);
}

export default FilmPage;