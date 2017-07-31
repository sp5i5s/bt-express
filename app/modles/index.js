// 新闻API模拟

var api = function(){};
api.list = function(func){
    db.query.table('cloud_school').where({vip : 0}).select(['id','school_name'],(error,result,filed)=>{
        func(result,error);
    })
};
api.info = function(id,func){
    db.query.table('cloud_school').where({id : id}).select((error,result,filed)=>{
        func(result,error);
    },'info')
}


module.exports = api; 