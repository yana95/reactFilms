import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/header/Header';
import Films from './components/films/Films';
import notebookImg from './images/notebookImg.jpeg';

class App extends React.Component{
	constructor(props, context){
		super(props, context);
		this.state = {
			films: [{
				title: "Notebook",
				release: 2004,
				type: 'Dramma',
				rating: 9,
				img: notebookImg
			}]
		};
	}

	render(){
		return(
			<div>
				<Header/>
				<Films films = {this.state.films} />
			</div>
		);
		
	}
}

ReactDom.render( <App />, document.getElementById('app'));