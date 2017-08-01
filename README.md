### bt-express
基于Express实现的一套轻量级的MVC框架
### 目录结构

```
.
├── bin                         #启动脚本
├── controller                  #controller
├── model                       #model
├── app                 		  #用户应用目录
│   ├── config                 
│   │   ├── config.js		#用户配置文件
│   ├── controllers			#控制层目录
│   ├── modules				#数据层目录
│   ├── views					#视图层目录
├── public                    #资源目录,scss,js,jpg
└── system                    #bt-express框架目录
```
    
Features
=====

* markdown格式支持
* highlight.js 代码高亮
* MVC代码风格
* jade模板引擎
* disqus评论
* Node 0.12 
* mongoose mongodb ORM module
* 后台管理基于angular.js

Install
=====

    1. npm install -g pm2
    2. git clone https://github.com/flex1988/Node_blog_V2.git
    3. cd Node_blog_V2
    4. npm install
    5. chmod u+x ./bin/run.sh
    6. ./bin/run.sh
    
ScreenShot
=====

![img](./public/image/screenshot.png)


