/**
* Module Dependecies
**/
var	mysql = require('mysql'),
    async = require('async'),
	_ = require('underscore');

var db = mysql.createConnection({
  setSocket: 'true',
  user     : 'root'
});


db.connect();


/**
* List all invites
**/
exports.getInvites = function(req, res) {
    console.log("feil");
    db.query('SELECT * FROM calendar.participants;', function(err, rows, fields) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(rows)
        }
    });
};

/**
* get All invites based on ID
**/
exports.getInvitesByID = function(req, res) {
    console.log(req);
    var ID = req.params;
    console.log(ID);
    db.query('SELECT appointment.appointmentID, appointment.starttime, appointment.endtime, appointment.desc, room.name, participants.status FROM calendar.appointment JOIN calendar.room ON appointment.bookedID=room.roomID JOIN calendar.participants ON appointment.appointmentID=participants.appointmentID WHERE participants.employeeID='+ID.employeeID+';', function(err, rows, fields) {
        console.log(rows);
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(rows)
        }
    });
};