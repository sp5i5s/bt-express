// 新闻API模拟

var api = function(){};
api.list = function(func){
    db.query.table('cloud_school').where({vip : 0}).order('id desc').select(['id','school_name'],(result)=>{
        func(result);
    })
};
api.info = function(id,func){
    db.query.table('cloud_school').where({id : id}).select((result)=>{
        func(result);
    },'info')
}


module.exports = api; 