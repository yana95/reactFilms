import React from 'react';
import { connect } from 'react-redux';
import {changeSort} from './actionsSortType';

const mapDispatchToProps = (dispatch) => {
    return {
        changeSort: (type) => dispatch(changeSort(type))
	}
};
const mapStateToProps = (state) => {
    return {
        sortType: state.sortType
    };
};
const types = ['release date', 'rating'];
class SortType extends React.Component{
	getButtons(){
		var buttons = types.map((item,i) => {
			return (
				<li key={i} className={this.props.sortType == item? 'active' : ''} onClick={() => {this.props.changeSort(item)} }>{item}</li>
			)
		});
		return buttons;
	}

	render(){
		return(
			<div className="sort">
				<p>Sort by</p>
				<ul>
					{this.getButtons()}
				</ul>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SortType);