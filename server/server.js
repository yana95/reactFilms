import express  from 'express';
import handleRender from './handleRender';

var app = express();
var port = process.env.PORT || 9000;

//app.use(express.static('built'));
app.get('/*', handleRender);

app.listen(port, function () {
  console.log('Example app listening on port ' + port );
});