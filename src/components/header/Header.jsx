import React from 'react';
import ReactDom from 'react-dom';
import styles from './header-style';
import { connect } from 'react-redux';
import {fetchFilms} from './../../actions';

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(fetchFilms(url))
	}
};

const mapStateToProps = (state) => {
    return {
        title: true,
        director: false
    };
};

class Header extends React.Component{

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
        this.props.fetchData(query);
	}

	render(){
		var title = (this.props.title)? 'active': '';
		var director = (this.props.director)? 'active': '';
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);