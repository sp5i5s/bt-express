var think = require( _config.think );
var api = require('../modles/index');

class list extends think{
    index(){
        (async ()=>{
            let result = await api.list();
            this.render('index/list', {list : result});
        })();
        // this.oc(function *(){
        //     let result = yield api.list();
        //     this.render('index/list', {list : result});
        // },this);
    }
    info(){
        api.info(this.get.id,(result)=>{
            this.render('index/info',{info : result});
        });
    }
}

module.exports = list;