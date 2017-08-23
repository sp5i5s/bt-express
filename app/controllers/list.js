var think = require( _config.think );
var api = require('../modles/index');

class list extends think{
    index(){
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
        });
    }
    info(){
        api.info(this._get.id,(result)=>{
            this.render('index/info',{info : result});
        });
    }
}

module.exports = list;