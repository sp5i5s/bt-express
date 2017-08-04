var think = require( _config.think );

class index extends think{
    constructor(){
        super();
    }
    index(){
        this.render('index/index');
    }
    posttj(){
        response.send( JSON.stringify(this.post ));
    }
    get(){
        response.send('index get');
    }
    set(){
        response.json(JSON.stringify(request.params));;
    }
}

module.exports = index;
