// importing express framework
var express = require('express');

// importing consign
var consign = require('consign');

//importing body-parser
var bodyParser = require('body-parser');

//importing express validator
var expressValidator = require('express-validator');

// init express object
var app = express(); 

//set var view engine and views
app.set('view engine', 'ejs');
app.set('views', './app/views');

//set middleware
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(expressValidator());

//autoloading in routes, models and controllers
consignO()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

// exporting app object
module.exports = app;