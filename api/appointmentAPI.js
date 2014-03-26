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
* Find appointment by ID
**/
exports.appointment = function(req, res, next, ID) {
    db.query('SELECT * FROM calendar.appointment WHERE appointmentID='+ID+';', function(err, rows, fields) {
        if (err) return next(err);
        if (!rows) return next(new Error('Failed to load appointment ' + req));
        req.appointment = rows;
        next();
    });
};

/**
* Create a appointment
**/
exports.create = function(req, res) {
  var appointment= req.body;
    db.query('INSERT INTO calendar.appointment SET ?', appointment, function(err, rows){
        if (err) {
            throw err;
        } else {
            res.jsonp(rows);
        }
    });
};


exports.latestID = function(req, res) {
    db.query('SELECT MAX(appointmentID) AS numb FROM calendar.appointment;', function(err, rows){
        console.log(rows);
        if (err) {
            console.log("ERROR");
            throw err;
        } else {
            res.jsonp(rows);
        }
    });
};
/**
* Delete a appointment
**/
exports.destroy = function(req, res) {
    var appointment = req.appointment[0];
     db.query('DELETE FROM calendar.appointment WHERE appointmentID='+appointment.appointmentID+';', function(err, rows, fields) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(rows);
        }
    });
};

/**
* Show a appointment
**/
exports.show = function(req, res) {
    res.jsonp(req.appointment);
};


/**
* List all appointments
**/
exports.all = function(req, res) {
    db.query('SELECT * FROM calendar.appointment as appointments', function(err, rows, fields) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(rows)
        }
    });
};