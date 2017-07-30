// 新闻API模拟

var api = function(){};
api.list = function(func){
    let query = 'SELECT * from cloud_news';
    db.query.get(query,(error,result,filed)=>{
        func(result,error);
    })
};
api.info = function(id,func){
    let query = `select * from cloud_news where id = ${id}`;
    db.query.get(query,(error,result,filed)=>{
        func(result,error);
    })
}


module.exports = api;