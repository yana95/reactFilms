import React from 'react';

import Header from './../header/Header';
import Films from './../films/Films';

function ResultsPage(props){
	return (
		<div className='resultsPage'>
			<Header {...props}/>
			<Films {...props}/>
		</div>
	);
}

export default ResultsPage;