var path = require('path');
var config = require('./config/system');
// 路由控制
var route = require("./route");
// 引入mysql
var db = require('./library/db/build');
// 引入redis
require('./library/redis/build');
// 引入log4
require('./library/log4/build');
// 引入工具类
require('./utils');
// 引入BT工具类
require('bt-utils');

// Controller堆栈
var _c_modules = {};

// 获取所有控制层的主执行文件
var list = utils.get_folder_files( _config.controller_path );
for( let info of list ){
    //缓存控制原型，task实例调用
    let key = bt.string.replace(info.replace(_config.controller_path,'').replace('.js','').substring(1),/\\/,'_');
    _c_modules[ key ] = info;
}
// 执行Route控制
route.init( _c_modules );