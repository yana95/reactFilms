import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/header/Header';
import Films from './components/films/Films';
import FullFilmInfo from './components/fullFilmInfo/fullFilmInfo';
import Film from './components/film/Film';
import App from './App';
import * as history from 'history';
import styles from './styles';

import notebookImg from './images/notebookImg.jpeg';


ReactDom.render( (
	<BrowserRouter>
		<App>
			<Switch>
				<Route exact path='/' render={(props) => (
					<Header {...props}/>
				)} />
				<Route path='/search/:title' render={(props) => (
					<div>
						<Header {...props}/>
						<Films {...props}/>
					</div>
				)} />
				<Route path="/film/:title" render={(props) => (
				<div className="film-info">
					<FullFilmInfo {...props} film = {{
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
				}}/>
					<Films/>
					</div>
				)} />
			</Switch>
			
			
		</App>
	</BrowserRouter>
), document.getElementById('app'));