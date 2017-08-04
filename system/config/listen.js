var express = require('express');
var ejs = require('ejs');
var path = require('path');
var bodyParser = require("body-parser");  


var app = express();
var favicon = require('express-favicon');

// app Config
app.use('/public',express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req,res,next){
  var _send = res.send;
  var sent = false;
  res.send = function(data){
    if(sent) return;
        _send.bind(res)(data);
        sent = true;
    }
    next();
});
app.use(function(req, res, next){
    res.setHeader('X-Powered-By', 'bt-express');
    next();
});
// app.engine('x.html', ejs.__express);
// app.use(favicon( path.resolve('public/favicon.ico') )); 
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, '../../app',_config._default_view)  );

var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
});

module.exports = app;