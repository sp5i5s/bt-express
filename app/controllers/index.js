var think = require( _config.think );
var api = require('../modles/index');

class index extends think{
    constructor(){
        super();
    }
    index(){
        (async ()=>{
            let result = await api.list();
            db.query.table('hxw_content').count(result_count => {
                this.render('index/index', {list : result,count : result_count.count});
            });
        })();
    }
    info(){
        (async ()=>{
            // 设置session
            //this.request.session.userid = 1;
            let result = await api.info(this.get.id);
            this.render('index/info', {info : result});
        })();
    }
    page(){
        let page = this.post.page;
        db.query.table('hxw_content').order('id desc').limit(page * 10 + ',10').select(result=>{
            response.send( result );
        })
    }
}

module.exports = index;