var app = require('express')(),
        server = require('http').createServer(app), 
        ent = require('ent'), // Permet de bloquer les caractères HTML (sécurité équivalente à htmlentities en PHP)
        fs = require('fs');

var express = require('express');

var mysql = require('mysql');
var http = require('http');
var path = require('path');
var expressValidator = require('express-validator');
var passport = require('passport');
var flash = require('connect-flash');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');



app.disable("x-powered-by");


console.log('port:4000');
server.listen(4000);