import React from 'react';
import ReactDom from 'react-dom';
import styles from './header-style';
import { connect } from 'react-redux';
import {fetchFilms} from './actionsHeader';
import SearchType from './../searchType/SearchType';

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(fetchFilms(url))
	}
};
class Header extends React.Component{

	transit(to) {
        this.props.history.push('/search/' + to);
    }

	search(){
		var query = document.getElementById('query').value;
		this.transit(query);
        this.props.fetchData(query);
	}

	render(){
		return(
			<div className = "wrapper afisha">
				<div className="header">
					<div className="search">
						<h1 className = 'logo' >netflixroulette</h1>
						<h2>Find your movie</h2>
						<input type='text' placeholder="Enter film title" id = 'query'/>
						<SearchType />
						<button className="search-btn" onClick={ () => this.search() }>Search</button>
					</div>
				</div>
			</div>
		);
		
	}
}

export default connect(null, mapDispatchToProps)(Header);