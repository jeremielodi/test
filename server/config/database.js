// File : congig/db.js -->
var mysql      = require('mysql');

var connection = mysql.createPool({
    connectionLimit:10000,
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'imatest'
});


connection.getConnection(function (error, tempCont) {
    if (error) {
        console.error('Error connecting: ' + error.stack);
        return;
    }
    console.log('Connection established');
});

module.exports = connection;