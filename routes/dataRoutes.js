var async = require('async');

module.exports = function(app) {

	// Employee Routes
	var employees = require('../api/employeeAPI')
	app.get('/employees', employees.all);
	app.post('/employees', employees.create);
	app.get('/employees/:employeeID', employees.show);
	app.post('/employees/:employeeID', employees.update);
	app.post('/employees/:employeeID/:groupID', employees.addGroup);
	app.get('/employees/:employeeID/:groupID', employees.removeGroup);
	app.del('/employees/:employeeID', employees.destroy);
	app.post('/employees/:employeeID/:appointmentID/status', employees.invite);

	// Finish with setting up the employeeID paramater
	app.param('employeeID', employees.employee);

	// Appointment Routes
	var appointments = require('../api/appointmentAPI')
	app.get('/appointments', appointments.all);
	app.post('/appointments', appointments.create);
	app.get('/appointments/:appointmentID', appointments.show);
	//app.put('/appointments/:appointmentID', appointments.update);
	app.del('/appointments/:appointmentID', appointments.destroy);
	app.get('/appointments/:appointmentID/:employeeID', appointments.createdBy);
	app.post('/appointments/latest', appointments.latestID);
	// Finish with setting up the appointmentID paramater
	app.param('appointmentID', appointments.appointment);

		// room Routes
	var rooms = require('../api/roomAPI')
	app.get('/rooms', rooms.all);
	app.post('/rooms', rooms.create);
	app.get('/rooms/:roomID', rooms.show);
	//app.put('/rooms/:roomID', rooms.update);
	app.del('/rooms/:roomID', rooms.destroy);
	
	// Finish with setting up the roomID paramater
	app.param('roomID', rooms.room);
	

	// Group Routes
	var groups = require('../api/groupAPI')
	app.get('/groups', groups.all);
	app.post('/groups', groups.create);
	app.get('/groups/:groupID', groups.show);
	app.post('/groups/:groupID', groups.update);
	app.del('/groups/:groupID', groups.destroy);
	
	// Finish with setting up the groupID paramater
	app.param('groupID', groups.group);

	var employeeGroups = require('../api/groupEmployeeAPI')
	app.get('/groupEmployees/:groupID', employeeGroups.getEmployeeIDs);

	var invites = require('../api/participantsAPI')
	app.get('/participants', invites.getInvites);

};
