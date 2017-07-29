var mysql = require('mysql');
// DB连接

class connection{
    get conn(){
        return this.connection;
    }
    set conn(_conn){
        this.connection = _conn;
    }
    constructor(){
        bt.log(_config);
        this.conn = mysql.createConnection(_config.db.config);
        this.conn.connect();
    }
}

// 数据库连接单例
var instance = null;
var get_instance = function(){
    if(instance == null){
        instance = new connection();
    }

    return instance;
}


module.exports =  get_instance;