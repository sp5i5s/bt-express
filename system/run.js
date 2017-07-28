require('./utils');
var config = require('./config/system');
var route = require("./route");
var path = require('path');

// Controller堆栈
var _c_modules = {};
// 将配置文件赋于全局
global._config = config;
global._config.system_path = __dirname;
global._config.base_path =  path.resolve('./');
global._config.controller_path = path.resolve('app',config._controllers);

// 获取所有控制层的主执行文件
var list = bt.get_folder_files( _config.controller_path );
for( let info of list ){
    // 缓存执行实例
    _c_modules[ info.replace( _config.controller_path ,'').replace('.js','').replace('\\','') ] = info;
}
//bt.log( _c_modules );
// 执行Route控制
route.init( _c_modules );