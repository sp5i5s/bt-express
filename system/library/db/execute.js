// db执行基类
var query = require('./query');

class execute extends query{
    constructor(){
        super();
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
            // 生成insert语句并将语写入query中的lastsql
            let sql = db.query._sql = ` insert into ${this._table}(${key_array.join(',')})values${value_array.join(',')}`;
            _config.db.conn.query(sql, (error, result, fields) => {
                this._insertId = result.insertId;
                result.status = this._insertId > 0 ? true : false;
                func(result,error);
            });
        }else{
            throw('class execute : save format error!');
        }
    }
    // 更新数据
    update(data,func){
        if(Object.prototype.toString.call(data) === '[object Object]'){
            let value_array = [];
            for(let value in data){
                value_array.push( `${value} = ${(()=>{
                    if(typeof value === 'number'){
                            return data[value];
                        }else{
                            return `'${data[value]}'`;
                        }
                })()}` );
            };
            let _where = '';
            if(this._where){
                _where = this._where;
            }
            let sql = db.query._sql =  `update ${this._table} set ${value_array.join(',')} ${_where}`;
            _config.db.conn.query(sql, (error, result, fields) => {
                result.status = result.affectedRows > 0 ? true : false;
                func(result,error);
            });
        }
    }
    // 删除数据
    delete(func){
        let _where = '';
        if(this._where){
            _where = this._where;
        }
        let sql = db.query._sql =  `delete from  ${this._table} ${_where}`;
        _config.db.conn.query(sql, (error, result, fields) => {
            result.status = result.affectedRows > 0 ? true : false;
            func(result,error);
        });
    }
    // 返回最后一次写入数据的ID
    get insertId(){
        return this._insertId;
    }
}

module.exports =  execute;