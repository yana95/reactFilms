import React from 'react';

import FullFilmInfo from './../fullFilmInfo/fullFilmInfo';
import Films from './../films/Films';
import notebookImg from './../../images/notebookImg.jpeg';

function MainPage(props){
	return (
		<div className="film-info">
			<FullFilmInfo {...props} film = {{
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
			}}/>
			<Films/>
		</div>
	);
}

export default MainPage;