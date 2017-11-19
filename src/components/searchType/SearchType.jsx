import React from 'react';
import { connect } from 'react-redux';
import {changeSearch} from './actionsSearchType';

const mapDispatchToProps = (dispatch) => {
    return {
        changeSearch: (type) => dispatch(changeSearch(type))
	}
};
const mapStateToProps = (state) => {
    return {
        searchType: state.searchType
    };
};
const types = ['title', 'director'];
class SearchType extends React.Component{
	getButtons(){
		var buttons = types.map((item,i) => {
			return (
				<button key = {i} className={ this.props.searchType == item? 'active' : '' } onClick={ () => this.props.changeSearch(item) }>{item}</button>
			)
		});
		return buttons;
	}

	render(){
		return(
			<div className="type">
				<p>Search by</p>
				{this.getButtons()}
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchType);