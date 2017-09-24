import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/Header';

class App extends React.Component{
	constructor(props, context){
		super(props, context);
		this.state = {
			searchOption : {
				title: true,
				director: false
			},
			films: []
		};
	}

	render(){
		return(
			<div>
				<p>fff</p>
				<Header searchOption={this.state.searchOption} />
			</div>
		);
		
	}
}

ReactDom.render( <App />, document.getElementById('app'));