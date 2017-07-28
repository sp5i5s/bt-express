var server = require("./config/listen");

var route = {
    // 初始化
    init( modules ){
        this.modules = modules;
        this.start();
    },
    start(){
        var self = this;
        server.get('*', function(req, res){
            let params = _config._default_controller;
            let query  = req.query;
            if(req.url === '/favicon.ico'){
                return;
            }
            if(req.params){
                if( req.params[0].replace('/','') != '' ){
                    params = req.params[0].replace('/','');
                }
            }
            new(require( self.modules[ params ] ))(req,res);
        });
    }
}

module.exports = route;