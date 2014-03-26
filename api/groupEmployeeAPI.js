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
* Get all employeeID in a group
**/
exports.getEmployeeIDs = function(req, res) {
    groupID = req.params
    console.log(groupID.groupIDs);
    db.query('SELECT employeeID FROM calendar.employeeGroup WHERE groupID IN ('+groupID.groupIDs+') GROUP BY employeeID;', function(err, rows, fields) {
        console.log(rows);
        if (err) {
            console.log("ERROR");
            throw err;
        } else {
            res.jsonp(rows);
        }
    });
};