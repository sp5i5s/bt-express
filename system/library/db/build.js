//DB配置的基本检查
var mysql = require('./connection');
var query = require('./query');

if( 'options' in _config){
    if( 'database' in _config.options){
        // 配置为全局DB配置文件
        global.db = { };
        global._config.db.config = _config.options.database;
        global._config.db.conn = mysql().conn;
        // 查询类构造
        global.db.query = query();
    }
}