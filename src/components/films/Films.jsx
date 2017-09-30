import React from 'react';
import ReactDom from 'react-dom';
import Film from './../film/Film';

class Films extends React.Component{
	constructor(props, context){
		super(props, context);
		this.state = {
			films: props.films,
			sort: {
				release: true,
				rating: false
			}
		};
		this.sort = this.sort.bind(this);
	}

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
		var films = this.state.films.map(item => {
			return <Film key={item.title} film = {item}/>;
		});
		return films;
	}

	render(){
		var release = (this.state.sort.release)? 'active': '';
		var rating = (this.state.sort.rating)? 'active': '';
		var films = this.sort();
		return(
			<div className="wrapper white">
				<div className="results-header">
					<p>{this.state.films.length} movies found</p>
					<div className="sort">
						<p>Sort by</p>
						<ul>
							<li className={release} onClick={this.changeSortType.bind(this,'release')}>release date</li>
							<li className={rating} onClick={this.changeSortType.bind(this,'rating')}>rating</li>
						</ul>
					</div>
				</div>
				<div className="results">
					{films}
				</div>
			</div>
		);
	}
}

export default Films;