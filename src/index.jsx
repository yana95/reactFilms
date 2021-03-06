//import 'babel-polyfill';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import MainPage from './components/MainPage/mainPage';
import ResultsPage from './components/ResultsPage/resultsPage';
import FilmPage from './components/FilmPage/filmPage';
import App from './App';
import * as history from 'history';
import styles from './styles';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import thunkMiddleware from 'redux-thunk';

const store = createStore(
	reducer,
	applyMiddleware(thunkMiddleware)
);

ReactDom.render((
	<Provider store={store}>
		<BrowserRouter>
			<App>
				<Switch>
					<Route exact path='/' component = {MainPage} />
					<Route path='/search/:title' component = {ResultsPage} />
					<Route path="/film/:title" component = {FilmPage} />
				</Switch>
			</App>
		</BrowserRouter>
	</Provider>
), document.getElementById('app'));