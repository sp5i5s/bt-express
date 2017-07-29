class index{
    constructor( req,res ){
        this.res = res;
        bt.log('index init');
    }
    index(){
        this.res.send('index');
    }
    get(){
        this.res.send('index get');
    }
}

module.exports = index;
