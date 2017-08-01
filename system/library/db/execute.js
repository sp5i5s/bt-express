// db执行基类

class execute{
    // 链式快捷选择表
    table(tableName){
        this._table = tableName;
        return this;
    }
    // 保存单个或多个数据实体
    save(data,func){
        let _object = Object.prototype.toString,
            key_array = [],
            value_array = [],
            fileds_data = data;
        if( _object.call(data) === '[object Array]' || _object.call(data) === '[object Object]'){
            if( _object.call(data) === '[object Array]'){
                fileds_data = data[0];
            }else if(_object.call(data) === '[object Object]'){
                // 强制将object转成json并注入转换队列
                let temp = bt.object.clone(data);
                data = [];
                data.push(temp);
            }
            // 取字段key
            for(let item in fileds_data){
                key_array.push( item );
            }
            // 取字段value
            for(let item of data){
                let values = '';
                for(let key of key_array){
                    values += (function( value ){
                        if(typeof value === 'number'){
                            return value;
                        }else{
                            return `'${value}'`;
                        }
                    })( item[key] ) + ',';
                }
                value_array.push( `(${values.substring(0,values.length - 1) })`);
            }
            // 生成insert语句
            let sql = ` insert into ${this._table}(${key_array.join(',')})values${value_array.join(',')}`;
            _config.db.conn.query(sql, (error, result, fields) => {
                this._insertId = result.insertId;
                func(result);
            });
        }else{
            throw('class execute : save format error!');
        }
    }
    // 返回最后一次写入数据的ID
    get insertId(){
        return this._insertId;
    }
}

// 数据库连接单例
var instance = null;
var get_instance = function(){
    if(instance == null){
        instance = new execute();
    }

    return instance;
}

module.exports =  get_instance;