import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/header/Header';
import Films from './components/films/Films';
import FullFilmInfo from './components/fullFilmInfo/fullFilmInfo';
import notebookImg from './images/notebookImg.jpeg';
import Film from './components/film/Film';

class App extends React.Component{
	constructor(props, context){
		super(props, context);
		this.state = {
			films: [{
				title: "Notebook",
				release: 2004,
				type: 'Dramma',
				rating: 9,
				img: notebookImg,
				description: 'Трогательная история любви, прочитанная пожилым мужчиной из старой записной книжки женщине в доме престарелых. Это история отношений юноши и девушки из разных социальных слоев, живших в Южной Каролине. Ной и Элли провели вместе незабываемое лето, пока их не разделили вначале родители, а затем Вторая мировая война.',
				director: 'bla',
				cast: 'bla-bla',
				duration: '154min',
				year: '1994'
			}]
		};
	}


	render(){
		return(
			<div className = 'film-page'>
				<FullFilmInfo film = {this.state.films[0]}/>
				<div className="wrapper white">
					<p className = 'director-films'>Films by {this.state.films[0].director} </p>
					<div className="results">
						{
							this.state.films.map(item => {
								return <Film key={item.title} film = {item}/>
							})
						}
					</div>
				</div>
			</div>
		);
		
	}
}

ReactDom.render( <App />, document.getElementById('app'));