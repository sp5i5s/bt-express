var think = require( _config.think );
var api = require('../modles/index');

class list extends think{
    index(){
<<<<<<< HEAD
        this.oc(function *(){
            let result = yield api.list();
            this.render('index/list', {list : result});
        },this);
    }
    get_list(){
        return new Promise(function(res){
            api.list((result)=>{
                res(result);
            });
=======
        // db.execute.table('cloud_news').where({id :22}).update({title : 'ttt'},(result)=>{
        //     bt.log(result);
        // })
        api.list((result)=>{
            this.render('index/list', {list : result});
>>>>>>> 6b3c7385ba293b6343548cc9d4c87b82c1792780
        });
    }
    info(){
        api.info(this._get.id,(result)=>{
            this.render('index/info',{info : result});
        });
    }
}

module.exports = list;