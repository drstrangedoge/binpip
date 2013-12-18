console.log('App - Start');

// dependencies
var path = require('path');
var express = require('express');
var http = require('http');
// var mongoose = require('mongoose');

// main config
var app = express();
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.favicon(__dirname + 'public/favicon.ico')); 
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


// development or production
app.configure('development', function () {
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
	app.locals.pretty = true;
});

app.configure('production', function () {
	app.use(express.errorHandler());
});


// mongoose
// mongoose.connect('mongodb://localhost/dogesrich');
// mongoose.connect('mongodb://localhost/dogespoor');


// routes
console.log('App - Starting routes');
require('./routes')(app);
console.log('App - Ending routes');

console.log('App - End');

// listen
http.createServer(app).listen(app.get('port'), function () {
	console.log("binpip server listening on port " + app.get('port'));
});