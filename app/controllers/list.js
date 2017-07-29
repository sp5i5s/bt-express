class list{
    constructor( req,res ){
        bt.log('list init');
        this.res = res;
    }
    index(){
        db.query.get('SELECT * from cloud_news',(error,result,filed)=>{
            this.res.render('login', {list : result});
        });
    }
}

module.exports = list;