var think = require( _config.think );
var api = require('../modles/index');

class list extends think{
    index(){
        // api.list((result,error)=>{
        //     this.render('index/list', {list : result});
        // });;
        db.query.table('cloud_school').where({type : 1}).select((result)=>{
            this.render('index/list', {list : result});
        })
    }
    info(){
        api.info(this._get.id,(result)=>{
            this.render('index/info',{info : result});
        });
    }
}

module.exports = list;