class list{
    constructor( req,res ){
        bt.log('list init');
        this.res = res;
    }
    index(){
         let list = {
            list : [
                {name : 'brandon'},
                {name : 'tony'},
                {name : 'lily'}
            ],
            user : 'welcome'
        }
        this.res.render('login', list);
    }
}

module.exports = list;