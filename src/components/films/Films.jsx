import React from 'react';
import ReactDom from 'react-dom';
import Film from './../film/Film';
import notebookImg from './../../images/notebookImg.jpeg';
import styles from './films-style';

class Films extends React.Component{
	constructor(props, context){
		super(props, context);
		this.state = {
			history: props.history,
			films: [{
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
			}],
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
			return <Film key={item.title} film = {item} history={this.state.history}/>;
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