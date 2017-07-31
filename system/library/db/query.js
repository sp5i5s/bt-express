// db查询基类

class query{
    constructor(){
        
    }
    get(query,func,type = 'list'){
        _config.db.conn.query(query, function (error, result, fields) {
            if(! error){
                if(type === 'info'){
                    result = result[0];
                }
                func(result,error);
            }else{
                let err = `<h1>Sql Error</h1><p>${error.sqlMessage}</p>`;
                response.send( err );
            }
        });
    }
    info(query,func){
        return get(query,func,'info');
    }
    // 链式快捷选择表
    table(tableName){
        this._table = tableName;
        return this;
    }
    // 链式Where条件带入
    where(where){
        this._where = null;
        // 条件字段的拼接
        let _whereArray = [];
        for(let _query in where){
            _whereArray.push( `${_query} = ${(function(){
                if(typeof where[_query] === 'Number'){
                    return where[_query];
                }else{
                    return `'${where[_query]}'`;
                }
            })()}` )
        }
        this._where = _whereArray.join(' and ');
        return this;
    }
    order(__order){
        this._order = __order;
        return this;
    }
    // 链式快捷选择字段
    select(){
        let fileds = [ '*' ],
            func = null,
            type = 'list';
        for(let item of arguments){
            let object = Object.prototype.toString;
            if(object.call(item) === '[object Array]'){
                fileds = item;
            }
            else if(object.call(item) === '[object Function]'){
                func = item;
            }
            else if(object.call(item) === '[object String]'){
                type = item;
            }
        }
        let _where = '',_order = '';
        if(this._where){
            _where = ` where ${this._where}`;
        }
        if(this._order){
            _order = `order by ${this._order}`;
        }
        this.sql = `select ${fileds.join(',')} from ${this._table} ${_where} ${_order}`;

        return this.get(this.sql,func,type);
    }
    // 输出最后一次执行的Sql
    get lastsql(){
        bt.log(this.sql);
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