var think = require( _config.think );
var querystring = require('querystring');

class index extends think{
    constructor(){
        super();
    }
    index(){
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
        //response.send('index set!');
        response.json(JSON.stringify(request.params));;
    }
}

module.exports = index;
