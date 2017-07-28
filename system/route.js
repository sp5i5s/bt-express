var server = require("./config/listen");
// Controll中action的控制
var task = require('./task');

var route = {
    // 初始化
    init( modules ){
        this.modules = modules;
        this.start();
    },
    start(){
        var self = this;
        server.get('*', function(req, res){
            // 取配置文件中的默认Controller名称
            let params = {
                controller : _config._default_controller,
                action : _config._default_action
            };
            let query  = req.query;
            // 过滤Ico,否则会造成请求污染
            if(req.url === '/favicon.ico'){
                return;
            }
            if(req.params){
                if( req.params[0].replace('/','') != '' ){
                    params.controller = req.params[0].replace('/','');
                }
            }
            // 如果URL结尾带个/，将去除
            if( params.controller.substring(params.controller.length -1) === '/'){
                params.controller = params.controller.substring(0,params.controller.length -1)
            }
            // 如果存在自带action，将带入
            let _params_array = params.controller.split('/');
            if(_params_array.length > 1){
                params.controller = _params_array[0]
                params.action = _params_array[1];
            }
            // 判断路由地址是否在C_Modules堆栈中
            if(params.controller in self.modules){
                let controller = require( self.modules[ params.controller ] );
                task.listen( { params : params ,controller_class : controller , req : req , res : res } );
            }else{
                // 未知路由 404
                res.send(`<html><body><h1>404</h1><p>无法找到该面页,请确认路由地址是否正确</p></body></html>`);
            }
        });
    }
}

module.exports = route;