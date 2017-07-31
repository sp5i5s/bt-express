var think = require( _config.think );

class index extends think{
    constructor(){
        super();
    }
    index(){
        response.send('test/index');
    }
    get(){
        response.send('test/get');
    }
}

module.exports = index;
