### bt-express
基于Express实现的一套轻量级的MVC框架
## 目录结构

```
├── app                         #用户应用目录
│   ├── config                 
│   │   ├── config.js           #用户配置文件
│   ├── controllers             #控制层目录
│   ├── modules                 #数据层目录
│   ├── views                   #视图层目录
├── public                      #资源目录,scss,js,jpg
├── logs                        #日志目录
└── system                      #bt-express框架目录
```
## 演示
<http://bt-express.5i5s.net:8080/>
 
## 特性

1. OOP的编码方式
2. MVC代码风格
3. 自定义DB配置选项
4. 可配置controllers(路由)多层嵌套
5. 配置的MVC目录名称
6. 独立封装Mysql操作类,支持select/update/delete
7. Query支持链式查询
8. ejs模板引擎
9. 引入全局utils工具
10. 支持redis缓存
11. 支持async/await同步
12. 支持log4日志

## 实例
 Contrller
```
 // 引入系统超类
var think = require( _config.think );
// index 控制器
class index extends think{
    // 构造方法并执行系统think超类
    constructor(){
        super();
    }
    // 默认action，可通过系统配置修改
    index(){
        // view渲染
        this.render('index/index');;
    }
    // post action
    post(){
        // 利用系统方法获取post
        let data = this.post;
        response.send(data);
    }
}
module.exports = index;
```
Model
```
var api = function(){};
api.list = function(func){
    // 在配置完DB参数后，将自动赋予全局db.query操作
    // db.query支持链式查询
    // table 指定查询表
    // where 指定where语句并支持多维
    // order 指定排序字段
    // select 指定字段(默认为*)，输出结果集
    db.query.table('cloud_school').where({vip : 0}).order('id desc').select(['id','school_name'],(result)=>{
        func(result);
    })
};
api.info = function(id,func){
    db.query.table('cloud_school').where({id : id,type : 2}).select((result)=>{
        func(result);
    },'info')
}
module.exports = api; 
```
async/await同步,需要Promise支持
```
(async ()=>{
            let result = await api.list();
            this.render('index/list', {list : result});
        })();
或
  this.oc(function *(){
             let result = yield api.list();
             this.render('index/list', {list : result});
         },this);
```
Views ejs模板引擎
```
 <ol class="news">
        <% list.forEach(function(info){ %>
            <li><a href="list/info?id=<%= info.id%>"><%= info.school_name%></a></li>
        <% })%>
 </ol>
```
redis(在全局范围内调用,配置app/config)
```
redis.get(key)
redis.set(key , value);
```
log4(在全局范围内调用,文件保存在logs)
```
log.info(message)
log.debug(message)
```
