// File : models/model.js --> 							
var model = function () {
    db = require('../config/database');
};


model.prototype.execute = function (sql, callback) {

    db.getConnection(function (error, tempCont) {

        if (error) {
            callback(err);
        } else {
            tempCont.query(sql, function (err, rows) {
                callback(err, rows);
            });
        }
    });
};
module.exports = new model();

