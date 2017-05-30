var app = require('express')(),
        server = require('http').createServer(app), 
      //  ent = require('ent'), // Permet de bloquer les caractères HTML (sécurité équivalente à htmlentities en PHP)
        fs = require('fs');

var express = require('express');

var mysql = require('mysql');
var http = require('http');
var path = require('path');
//var expressValidator = require('express-validator');
var passport = require('passport');
var flash = require('connect-flash');
//var cookieParser = require('cookie-parser');
//var bodyParser = require('body-parser');
var session = require('express-session');

//allowing remote access
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    next();
});


app.disable("x-powered-by"); //don't know in what server you work

app.use(express.static('../client'));
app.use(express.static('repport'));



//session parameters
// session secret
app.use(session({
    resave: true,
    saveUninitialized: false,
    secret: 'secret'
}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(require('body-parser').urlencoded({extended: true}));

app.use(flash());

//including all configured routes
var routes = require('./config/routes')(app);




//running the server 
console.log('port:4000');
server.listen(4000);