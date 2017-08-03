// ajax 同步
function oc(gen,self){
    let g = gen.call(self);
    function next(data){
        let result = g.next(data);
        if(result.done){
            return result.value;
        }
        result.value.then(result => {
            next(result);
        })
    }
    next();
}

module.exports = oc;