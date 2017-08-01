[![npm version](https://badge.fury.io/js/thinknode.svg)](https://badge.fury.io/js/thinknode)
[![Build Status](https://travis-ci.org/richenlin/thinknode.svg?branch=master)](https://travis-ci.org/richenlin/thinknode)
[![Dependency Status](https://david-dm.org/richenlin/thinknode.svg)](https://david-dm.org/richenlin/thinknode)
### bt-express
基于Express实现的一套轻量级的MVC框架
### 目录结构

```
├── app                         #用户应用目录
│   ├── config                 
│   │   ├── config.js           #用户配置文件
│   ├── controllers             #控制层目录
│   ├── modules                 #数据层目录
│   ├── views                   #视图层目录
├── public                      #资源目录,scss,js,jpg
└── system                      #bt-express框架目录
```
    

### 特色

* OOP的编码方式
* MVC代码风格
* 自定义DB配置选项
* 可配置controllers(路由)多层嵌套
* 可配置的MVC目录名称
* 独立封装Mysql操作类
* Query支持链式查询
* 引入全局utils工具


