import React from 'react';
import Film from './../film/Film';
import styles from './films-style';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        films: state.films,
        sort: {
            release: true,
            rating: false
        }
    };
};

class Films extends React.Component{

	changeSortType(arg){
		if(!this.state.sort[arg]){
			this.setState({
				sort: {
					release: !this.state.sort.release,
					rating: !this.state.sort.rating
				}
			});
		}
	}

	sort(){
		var films = this.props.films.map(item => {
			return <Film key={item.id} film = {item} history={this.props.history}/>;
		});
		return films;
	}

	checkResults(){
        var films = this.sort();
        if( films.length > 0 ){
        	return films;
		}
		return (<p className="no-found">No films found</p>)
	}

	render(){
		var release = (this.props.sort.release)? 'active': '';
		var rating = (this.props.sort.rating)? 'active': '';

		return(
			<div className="wrapper white">
				<div className="results-header">
					<p>{this.props.films.length} movies found</p>
					<div className="sort">
						<p>Sort by</p>
						<ul>
							<li className={release} onClick={this.changeSortType.bind(this,'release')}>release date</li>
							<li className={rating} onClick={this.changeSortType.bind(this,'rating')}>rating</li>
						</ul>
					</div>
				</div>
				<div className="results">
					{this.checkResults()}
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps)(Films);