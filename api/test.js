/**
* Module Dependecies
**/
var	mysql = require('mysql'),
    async = require('async'),
	_ = require('underscore');

var db = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '',
  database : 'test'
});

db.connect();
console.log(db);
/**
* Find client by ID
**/



/**
* Create a client
**/



/**
* Update a client
**/


/**
* Delete a client
**/


/**
* Show a client
**/


/**
* List all clients
**/
exports.all = function(req, res) {
    db.query('SELECT * FROM clients as clients', function(err, rows, fields) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(rows)
        }
    });
};