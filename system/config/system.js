// 系统基础配置项

var path = require('path');
var options = require('../../app/config/config')

var config = {
    // 设置默认Controller的文件夹
    _controllers : 'controllers',
    // 默认执行的control
    _default_controller : 'index',
    // 默认执行的action
    _default_action : 'index'
}

// 系统配置
global._config = config;
// DB配置
global._config.db = {};
// App配置,包括应用、数据库、缓存等
global._config.options = options;
// 项目根目录
global._config.system_path = path.resolve('./');;
// APP根目录
global._config.base_path = path.resolve('app');
// App下Controll 目录
global._config.controller_path = path.resolve('app',config._controllers);
// Think系统Controller路径
global._config.think = _config.system_path + '/system/think'; 

module.exports = config;