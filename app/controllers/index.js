var think = require( _config.think );

class index extends think{
    constructor(){
        super();
    }
    index(){
        response.send('index');
    }
    get(){
        response.send('index get');
    }
    set(){
        response.send('index set');
    }
}

module.exports = index;
