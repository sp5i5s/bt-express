var think = require( _config.think );

class index extends think{
    constructor(){
        super();
    }
    index(){
        response.send('test/deom/index');
    }
    get(){
        response.send('test/deom/get');
    }
}

module.exports = index;
