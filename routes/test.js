var async = require('async');

module.exports = function(app) {
	// Client Routes
	var clients = require('../api/test')
	app.get('/clients', clients.all);
	//app.post('/clients', clients.create);
	//app.get('/clients/:clientID', clients.show);
	//app.put('/clients/:clientID', clients.update);
	//app.del('/clients/:clientID', clients.destroy);

	// Finish with setting up the clientID paramater
	//app.param('clientID', clients.client);
}