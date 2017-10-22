import React from 'react';
import ReactDom from 'react-dom';
import styles from './header-style';


class Header extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			title: true,
			director: false
		};
	}

	transit(to) {
        this.props.history.push('/search/' + to);
    }
	changeSearchType(arg) {
		if(!this.state[arg]){
			this.setState({
				title: !this.state.title,
				director: !this.state.director
			});
		}
	}

	search(){
		var query = document.getElementById('query').value;
		this.transit(query);
		this.props.actions.fetchFilms(query);
	}

	render(){
		var title = (this.state.title)? 'active': '';
		var director = (this.state.director)? 'active': '';
		return(
			<div className = "wrapper afisha">
				<div className="header">
					<div className="search">
						<h1 className = 'logo' >netflixroulette</h1>
						<h2>Find your movie</h2>
						<input type='text' placeholder="Enter film title" id = 'query'/>
						<div className="type">
							<p>Search by</p>
							<button className={title} onClick={ () => this.changeSearchType('title') }>Title</button>
							<button className={director} onClick={ () => this.changeSearchType('director') }>Director</button>
						</div>
						<button className="search-btn" onClick={ () => this.search() }>Search</button>
					</div>
				</div>
			</div>
		);
		
	}
}

export default Header;