/**
* Module Dependecies
**/
var	mysql = require('mysql'),
    async = require('async');
	db = require('mysql');


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
    db.query('SELECT * FROM cliens as clients', function(err, rows) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(rows[0].clients)
        }
    });
};