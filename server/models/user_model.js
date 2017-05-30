//Common-parts-of-all-models++++++++++++++++++++++++++++++++++
model = require('./model');
var user_model = function() {};
user_model.prototype.constructor = user_model;
user_model.prototype = model;
var mysql = require('mysql');
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//Fetch all users
user_model.prototype.findAll = function(data, callback) {
    sql = "SELECT * FROM users order by Firstname ASC";
    this.execute(sql, callback);
};

//Fetch a particular user
user_model.prototype.find = function(data, callback) {
    sql = "SELECT * FROM users WHERE ID= " + mysql.escape(data.ID);
    this.execute(sql, callback);
};
 

module.exports = new user_model();