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
* List all clients
**/
exports.all = function(req, res) {
    db.query('SELECT * FROM Calendar.Ansatt as employees', function(err, rows, fields) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(rows)
        }
    });
};