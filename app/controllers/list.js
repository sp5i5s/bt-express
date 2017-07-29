var think = require( _config.think );

class list extends think{
    index(){
        db.query.get('SELECT * from cloud_news',(error,result,filed)=>{
            response.render('login', {list : result});
        });
    }
    info(){
        response.send( request.query );
    }
}

module.exports = list;