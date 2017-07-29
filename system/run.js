require('./utils');
var path = require('path');
var config = require('./config/system');
var route = require("./route");
var db = require('./library/db/build');


// Controller堆栈
var _c_modules = {};

// 获取所有控制层的主执行文件
var list = bt.get_folder_files( _config.controller_path );
for( let info of list ){
    // 缓存控制原型，task实例调用
    _c_modules[ info.replace( _config.controller_path ,'').replace('.js','').replace( path.sep ,'') ] = info;
}
// 执行Route控制
route.init( _c_modules );