import React from 'react';
import {renderToString} from 'react-dom/server';
import App from '../src/App';

function renderFullPage(html) {
  return `
  	<!DOCTYPE html>
	<html>
	 <head>
	  <meta charset="utf-8">
	 </head>
	 <body>
	 	<div class="content">
		    <div id="app">${html}</div>
		    <div class="footer">
		    	<p>netflixroulette</p>
		    </div>
	    </div>
	   
	 </body>
	</html>
  `;
}
// <script type='text/javascript' src='/home.js'></script>
function handleRender(req, res){
	const html = renderToString(<App/>);
	res.send(renderFullPage(html));
}

export default handleRender;