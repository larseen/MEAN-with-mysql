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
* Find employee by ID
**/
exports.employee = function(req, res, next, id) {
    db.query('SELECT * FROM calendar.employee WHERE employeeID='+id+';', function(err, rows, fields) {
        console.log(rows);
        if (err) return next(err);
        if (!rows) return next(new Error('Failed to load employee ' + req));
        req.employee = rows;
        next();
    });
};


/**
* Create a employee
**/
exports.addGroup = function(req, res) {
    var groupEmployee= req.body;
    console.log(groupEmployee);
    db.query('INSERT INTO calendar.employeeGroup SET ?', groupEmployee, function(err, rows){
        if (err) {
            throw err;
        } else {
            res.jsonp(rows);
        }
    });
};

/**
* Create a employee
**/
exports.create = function(req, res) {
  var employee= req.body;
    db.query('INSERT INTO calendar.employee SET ?', employee, function(err, rows){
        if (err) {
            throw err;
        } else {
            res.jsonp(rows);
        }
    });
};


/**
* Update a employee
**/
exports.update = function(req, res) {
    var employee = req.body;
    console.log(employee);
    db.query('UPDATE calendar.employee SET ? WHERE employeeID='+employee.employeeID+';', employee, function(err, rows){
        if (err) {
            throw err;
        } else {
            res.jsonp(rows);
        }
    });
};



/**
* Delete a employee
**/
exports.destroy = function(req, res) {
    var employee = req.employee[0];
     db.query('DELETE FROM calendar.employee WHERE employeeID='+employee.employeeID+';', function(err, rows, fields) {
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
* Show a employee
**/
exports.show = function(req, res) {
    res.jsonp(req.employee);
};


/**
* List all employees
**/
exports.all = function(req, res) {
    db.query('SELECT * FROM calendar.group JOIN calendar.employeeGroup ON employeeGroup.groupID=group.groupID RIGHT JOIN calendar.employee ON employee.employeeID=employeeGroup.employeeID;', function(err, rows, fields) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(rows)
        }
    });
};