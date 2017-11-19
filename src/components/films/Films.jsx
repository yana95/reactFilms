import React from 'react';
import Film from './../film/Film';
import styles from './films-style';
import { connect } from 'react-redux';
import SortType from './../sortType/SortType';

const mapStateToProps = (state) => {
    return {
        films: state.films,
        sortType: state.sortType
    };
};

class Films extends React.Component{
	getFilms(){
		var films = this.sort();
		films = films.map(item => {
			return <Film key={item.id} film = {item} history={this.props.history}/>;
		});
		return films;
	}

	sort(){
		var ratingSort = function(a,b){
			if (a.vote_average > b.vote_average) {
		    	return 1;
		  	}
		  	if (a.vote_average < b.vote_average) {
		    	return -1;
		  	}
		  	return 0;
		}
		var releaseSort = function(a,b){
			if (Date.parse(a.release_date) > Date.parse(b.release_date)) {
		    	return 1;
		  	}
		  	if (Date.parse(a.release_date) < Date.parse(b.release_date)) {
		    	return -1;
		  	}
		  	return 0;
		}
		if(this.props.sortType == 'rating'){
			return this.props.films.sort(ratingSort);
		} else {
			return this.props.films.sort(releaseSort);
		}
	}



	checkResults(){
        var films = this.getFilms();
        if( films.length > 0 ){
        	return films;
		}
		return (<p className="no-found">No films found</p>)
	}

	render(){
		return(
			<div className="wrapper white">
				<div className="results-header">
					<p>{this.props.films.length} movies found</p>
					<SortType />
				</div>
				<div className="results">
					{this.checkResults()}
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps)(Films);