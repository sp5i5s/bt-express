// 新闻API模拟

var api = function(){};
api.list = function(func){
    // 在配置完DB参数后，将自动赋予全局db.query操作
    // db.query支持链式查询
    // table 指定查询表
    // where 指定where语句并支持多维
    // order 指定排序字段
    // select 指定字段(默认为*)，输出结果集
    return new Promise(function(Resolved){
        db.query.table('cloud_news').order('id desc').limit(10).select(['id','title'],(result)=>{
            Resolved(result);
        })
    });
};
api.info = function(id,func){
    db.query.table('cloud_news').where({id : `= ${id}`}).select((result)=>{
        func(result);
    },'info')
}


module.exports = api; 