// Controll的多级控制

var server = require("./config/listen");
var task = require('./task');

var route = {
    // 初始化
    init( modules ){
        this.modules = modules;
        this.bind();
    },
    bind(){
        server.get('*', (req, res) => {
            this.start(req,res);
        });
        server.post('*', (req, res) => {
            this.start(req,res);
        })
    },
    start(req,res){
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
        // url开始
        if(req.params){
            // 去除前尾/
            let url = req.params[0];
            if(url.substring(0,1) === '/'){
                url = url.substring(1);
            }
            if(url.substring(url.length -1) === '/'){
                url = url.substring(0,url.length - 1);
            }
            if(! url.is_empty()){
                // 替换/为_的特征
                let con =  bt.string.replace(url,/\//,'_').split('_');
                // 判断多层路由和路由是否自带action
                let _task = [];
                if(con.length > _config.options.route_level){
                    for(let i =0;i<con.length - 1 ;i++){
                        _task.push(con[i]);
                    }
                    params.controller = _task.join('_');;
                    params.action = con[ con.length-1 ];
                }
                else if( con.length === _config.options.route_level ){
                    for(let item of con){
                        _task.push( item );
                    }
                    params.controller = _task.join('_');
                }
            }
        }
        // bt.log(params);
        // 判断路由地址是否在C_Modules堆栈中
        if(params.controller in this.modules){
            let controller = require( this.modules[ params.controller ] );
            task.listen( { params : params ,controller_class : controller , req : req , res : res } );
        }else{
            // 未知路由 404
            res.send(`<html><body><h1>404</h1><p>无法找到该面页,请确认路由地址是否正确</p></body></html>`);
        }
    }
}

module.exports = route;