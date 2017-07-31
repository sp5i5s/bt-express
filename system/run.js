var path = require('path');
var config = require('./config/system');
var route = require("./route");
var db = require('./library/db/build');
require('./utils');
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
//bt.log(_c_modules);
// 执行Route控制
route.init( _c_modules );