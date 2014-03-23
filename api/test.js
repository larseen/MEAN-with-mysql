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
exports.client = function(req, res, next, id) {
    db.query('SELECT * FROM test.clients WHERE clientID='+id+';', function(err, rows, fields) {
        if (err) return next(err);
        if (!rows) return next(new Error('Failed to load client ' + req));
        req.client = rows;
        next();
    });
};



/**
* Create a client
**/
exports.create = function(req, res) {
	console.log(req.body);
	var client = req.body;
    db.query('INSERT INTO test.clients VALUES ('+client.ID+','+client.NAME+');', function(err, rows, fields){
        if (err) {
            return res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(rows);
        }
    });
};



/**
* Update a client
**/



/**
* Delete a client
**/
exports.destroy = function(req, res) {
    var client = req.client[0];
     db.query('DELETE FROM test.clients WHERE clientID='+client.clientID+';', function(err, rows, fields) {
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
* Show a client
**/
exports.show = function(req, res) {
    res.jsonp(req.client);
};


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