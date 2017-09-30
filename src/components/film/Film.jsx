import React from 'react';
import ReactDom from 'react-dom';

function Film (props){
	return (
		<div className = 'film'>
			<div className = 'info'>
				<span className = 'release'>{props.film.release}</span>
				<p className = 'title'>{props.film.title} vgergerg geregher</p>
				<p className = 'type'>{props.film.type}</p>
			</div>
		</div>
	);
}

export default Film;