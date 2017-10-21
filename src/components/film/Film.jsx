import React from 'react';
import ReactDom from 'react-dom';
import styles from './film-style';

class Film extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			film: this.props.film,
			history: props.history
		}
	}

	showInfo(title){
		this.state.history.push('/film/' + title);
	}

	render(){
		return (
			<div className = 'film' onClick = { () => this.showInfo(this.state.film.title) } >
				<div className = 'info'>
					<span className = 'release'>{this.state.film.release}</span>
					<p className = 'title'>{this.state.film.title} vgergerg geregher</p>
					<p className = 'type'>{this.state.film.type}</p>
				</div>
			</div>
		);
	}
}

export default Film;