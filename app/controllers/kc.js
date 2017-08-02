var think = require( _config.think );

class kc extends think{
    index(){
        db.query.table('kc').select((result)=>{
            response.send(result);
        })
    }
    update(){
        var table = db.execute.table('kc');
        table.select(result=>{
            // if( result.count > 0){
            //     table.where({id : '= 1',count : '> 0'}).update({count : result.count - 1},ac=>{
            //         if(ac.status){
            //             response.send('剩余库存' + (result.count - 1) );
            //         }
                    
            //     });
            // }else{
            //     response.send('没有库存');
            // }
        },'info');
        // db.query.table('cloud_news').select(result=>{
        //     //bt.log(result);
        // })
    }
    delete(){
        db.execute.table('kc').where({id : '=1'}).delete(result => {
            response.send(result.status);
        })
    }
    
}

module.exports = kc;