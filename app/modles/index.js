// 新闻API模拟

var api = function(){};
api.list = function(func){
    // 在配置完DB参数后，将自动赋予全局db.query操作
    // db.query支持链式查询
    // table 指定查询表
    // where 指定where语句并支持多维
    // order 指定排序字段
    // select 指定字段(默认为*)，输出结果集
    db.query.table('cloud_school').where({vip : 0}).order('id desc').select(['id','school_name'],(result)=>{
        func(result);
    })
};
api.info = function(id,func){
    db.query.table('cloud_school').where({id : id,type : 2}).select((result)=>{
        func(result);
    },'info')
}


module.exports = api; 