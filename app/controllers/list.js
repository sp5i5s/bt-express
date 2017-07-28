
class list{
    constructor( req,res ){
        let list = {
            list : [
                {name : 'brandon'},
                {name : 'tony'},
                {name : 'lily'}
            ],
            user : 'welcome'
        }
        res.render('login', list);
    }
}

module.exports = list;
// app.get('/', function (req, res) {
//     res.send("OK");
// });

// app.get(/^\/user\/(\d{1})\/pid\/(\d{1})$/,(req,res)=>{
//     res.send(req.params);     
// })

//     
        // app.get('/', function (req, res) {
        //          let list = {
        //     list : [
        //         {name : 'brandon'},
        //         {name : 'tony'},
        //         {name : 'lily'}
        //     ],
        //     user : 'welcome'
        // }
        // res.render('login', list);
        // });