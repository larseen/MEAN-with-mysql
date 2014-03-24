/**
* Module Dependecies
**/
var	mysql = require('mysql'),
    async = require('async'),
	_ = require('underscore');

var db = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : ''
});


db.connect();

/**
* Find room by ID
**/
exports.room = function(req, res, next, ID) {
    db.query('SELECT * FROM calendar.room WHERE roomID='+ID+';', function(err, rows, fields) {
        if (err) return next(err);
        if (!rows) return next(new Error('Failed to load room ' + req));
        req.room = rows;
        next();
    });
};

/**
* Create a room
**/
exports.create = function(req, res) {
  console.log(req.body);
  var room= req.body;
    db.query('INSERT INTO calendar.room SET ?', room, function(err, rows){
        if (err) {
            console.log("ERROR");
            throw err;
        } else {
            res.jsonp(rows);
        }
    });
};


/**
* Delete a room
**/
exports.destroy = function(req, res) {
    var room = req.room[0];
     db.query('DELETE FROM calendar.room WHERE roomID='+room.roomID+';', function(err, rows, fields) {
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
* Show a room
**/
exports.show = function(req, res) {
    res.jsonp(req.room);
};


/**
* List all rooms
**/
exports.all = function(req, res) {
    db.query('SELECT * FROM calendar.room as room', function(err, rows, fields) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(rows)
        }
    });
};