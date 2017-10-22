import React from 'react';
import { connect } from 'react-redux'
import Header from './../header/Header';
import * as Actions from './../../actions';
import { bindActionCreators } from 'redux'

const MainPage = (props) => (
  <Header {...props} />
);

const mapDispatchToProps = (dispatch) => (
	{
		actions: bindActionCreators(Actions, dispatch)
	}
);

export default connect(
  mapDispatchToProps
)(MainPage);