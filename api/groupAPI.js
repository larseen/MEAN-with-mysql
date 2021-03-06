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
* Find group by ID
**/
exports.group = function(req, res, next, ID) {
    db.query('SELECT * FROM calendar.group WHERE groupID='+ID+';', function(err, rows, fields) {
        if (err) return next(err);
        if (!rows) return next(new Error('Failed to load group ' + req));
        req.group = rows;
        next();
    });
};

/**
* Create a group
**/
exports.create = function(req, res) {
  console.log(req.body);
  var group= req.body;
    db.query('INSERT INTO calendar.group SET ?', group, function(err, rows){
        if (err) {
            console.log("ERROR");
            throw err;
        } else {
            res.jsonp(rows);
        }
    });
};

/**
* Update a group
**/
exports.update = function(req, res) {
    var group = req.body;
    console.log(group);
    db.query('UPDATE calendar.group SET ? WHERE groupID='+group.groupID+';', group, function(err, rows){
        if (err) {
            throw err;
        } else {
            res.jsonp(rows);
        }
    });
};


/**
* Delete a group
**/
exports.destroy = function(req, res) {
    var group = req.group[0];
     db.query('DELETE FROM calendar.group WHERE groupID='+group.groupID+';', function(err, rows, fields) {
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
* Show a group
**/
exports.show = function(req, res) {
    res.jsonp(req.group);
};


/**
* List all groups
**/
exports.all = function(req, res) {
    db.query('SELECT group.groupID, group.name, employee.username FROM Calendar.group LEFT JOIN calendar.employeeGroup ON group.groupID=employeeGroup.groupID LEFT JOIN calendar.employee ON employee.employeeID=employeeGroup.employeeID;', function(err, rows, fields) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(rows)
        }
    });
};