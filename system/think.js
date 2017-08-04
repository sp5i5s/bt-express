// System基类，用于接管用户的请求作用域
var system_oc = require('./oc');

class think{
    // Generator 同步绑定
    oc(fn,self){
        system_oc(fn,self);
    }

    get request(){
        return request;
    }

    get response(){
        return response;
    }
    // 页面渲染方法
    render(){
        return response.render( ...arguments );
    }
    // 获取get数据
    get get(){
        return request.query;
    }
    // 获取post 数据 
    get post(){
        return request.body;
    }
    // 是否是post提交
    get is_post(){
        return request.route.methods.hasOwnProperty('post');
    }
    // 是否是get提交
    get is_get(){
        return request.route.methods.hasOwnProperty('get');
    }
    // 是否是put提交
    get is_put(){
        return request.route.methods.hasOwnProperty('put');
    }
    // 是否是delete提交
    get is_delete(){
        return request.route.methods.hasOwnProperty('delete');
    }
}

module.exports = think;