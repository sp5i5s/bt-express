var think = require( _config.think );
var api = require('../modles/index');

class list extends think{
    index(){
        db.execute.table('clound_news').where({id : 43,name :'ts'}).update({title : 'ttt',id : 50},(result)=>{
            bt.log(result);
        })
        // api.list((result)=>{
        //     this.render('index/list', {list : result});
        // });
    }
    info(){
        api.info(this._get.id,(result)=>{
            //bt.log(db.query.lastsql)
            this.render('index/info',{info : result});
        });
    }
}

module.exports = list;