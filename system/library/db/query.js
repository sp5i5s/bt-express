// db查询基类

class query{
    constructor(){
        
    }
    get(query,func){
        _config.db.conn.query(query, function (error, result, fields) {
            func(error,(result.length ===1 ? result[0] : result),fields);
        });
    }
}

// 数据库连接单例
var instance = null;
var get_instance = function(){
    if(instance == null){
        instance = new query();
    }

    return instance;
}


module.exports =  get_instance;