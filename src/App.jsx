import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/header/Header';
import Films from './components/films/Films';
import FullFilmInfo from './components/fullFilmInfo/fullFilmInfo';
import Film from './components/film/Film';

class App extends React.Component{
	render(){
		return(
			<div>
				{this.props.children}
			</div>
		);	
	}
}
export default App;
