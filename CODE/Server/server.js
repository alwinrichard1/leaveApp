var express = require('express');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));

app.get('/', function (request, response) {
    response.send("<h1>App running...</h1>")
});

var port = process.env.PORT || 8080;

app.listen(port, function () {
    console.log('App running on port ' + port);
});