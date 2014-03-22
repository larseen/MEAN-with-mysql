var express = require('express'),
	app = express(),
	mysql = require('mysql');

var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test'
});

app.use(express.bodyParser());
app.use(express.static('./app'));

// Bootstrap models
require('./models/test');
// Bootstrap routes
require('./routes/test')(app);

app.listen(3001);
