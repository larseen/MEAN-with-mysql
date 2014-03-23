var async = require('async');

module.exports = function(app) {
	// Client Routes
	var clients = require('../api/test')
	app.get('/clients', clients.all);
	app.post('/clients', clients.create);
	app.get('/clients/:clientID', clients.show);
	//app.put('/clients/:clientID', clients.update);
	app.del('/clients/:clientID', clients.destroy);

	// Finish with setting up the clientID paramater
	app.param('clientID', clients.client);

	// Employee Routes
	var employees = require('../api/employeeAPI')
	app.get('/employees', employees.all);
	//app.post('/employees', clients.create);
	//app.get('/employees/:username', clients.show);
	//app.put('/employees/:username', clients.update);
	//app.del('/employees/:username', clients.destroy);
	
	// Finish with setting up the username paramater
	app.param('username', clients.client);
};
