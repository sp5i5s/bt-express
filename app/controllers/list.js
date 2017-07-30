var think = require( _config.think );
var api = require('../modles/index');

class list extends think{
    index(){
        api.list((result,error)=>{
            this.render('index/list', {list : result});
        });;
    }
    info(){
        //response.send(request.query.id)
        api.info(request.query.id,(result,error)=>{
            this.render('index/info',{info : result});
        });
    }
}

module.exports = list;