var express = require('express');
var consign = require('consign');
var crypto = require('crypto');
var path = require("path");
var multer = require('multer');
var gridfsStorage = require('multer-gridfs-storage');
// var grid = require('gridfs-stream');
var methodOverride = require('method-override');
var express_validator = require('express-validator');
var body_parser = require('body-parser');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));
app.use(express_validator());
app.use(methodOverride('_method'));


app.use(body_parser.urlencoded({extended: true}));

consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;