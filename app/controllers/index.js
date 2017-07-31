var think = require( _config.think );

class index extends think{
    constructor(){
        super();
    }
    index(){
        this.render('index/index');;
    }
    post(){
        this._post(function(post){
            response.send(post.name);
            bt.log("OKddd");
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
