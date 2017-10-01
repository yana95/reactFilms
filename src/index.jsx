import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/header/Header';
import Films from './components/films/Films';
import FullFilmInfo from './components/fullFilmInfo/fullFilmInfo';
import Film from './components/film/Film';
import App from './App';
import * as history from 'history';

import notebookImg from './images/notebookImg.jpeg';

const browserHistory = history.createBrowserHistory();

ReactDom.render( (
	<Router>
		<App history = {browserHistory}>
		<div>
			<Route path='/'>
				<Header history = {browserHistory} />
			</Route>
			<Route path='/search/:query'>
				<Films />
			</Route>
			</div>
		</App>
	</Router>
), document.getElementById('app'));