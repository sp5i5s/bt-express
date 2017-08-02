//DB配置的基本检查
var mysql = require('./connection');
var query = require('./query');
var execute = require('./execute');

if( 'options' in _config){
    if( 'database' in _config.options){
        // DB配置
        global._config.db = {};
        global._config.db.config = _config.options.database;
        global._config.db.conn = mysql().conn;
        // 配置为全局DB配置文件
        global.db = { };
        // 查询类构造
        global.db.query = new query();
        // 执行类构造
        global.db.execute = new execute();
    }
}