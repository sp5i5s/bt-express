var think = require( _config.think );

class index extends think{
    constructor(){
        super();
    }
    index(){
        let data = [
            {title : '张三'},
            {title : '李四'}
        ]
        db.execute.table('cloud_news').save(data,(result)=>{
            bt.log(db.execute.insertId);
        });
        this.render('index/index');
    }
    post(){
        this._post(function(post){
            response.send(post.name);
        })
    }
    get(){
        response.send('index get');
    }
    set(){
        response.json(JSON.stringify(request.params));;
    }
}

module.exports = index;
