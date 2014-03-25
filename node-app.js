var express = require('express'),
	app = express(),
	mysql = require('mysql');


app.use(express.bodyParser());
app.use(express.static('./app'));

// Bootstrap models

// Bootstrap routes
require('./routes/dataRoutes')(app);

app.listen(8001);
