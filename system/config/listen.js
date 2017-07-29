var express = require('express');
var ejs = require('ejs');
var path = require('path');

var app = express();
var favicon = require('express-favicon');

// app Config
app.use('/public',express.static('public'));
// app.engine('.html', ejs.__express);
// app.use(favicon( path.resolve('public/favicon.ico') )); 
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, '../../app') + '/views' );

var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
});

module.exports = app;