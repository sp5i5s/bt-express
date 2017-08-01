// System基类，用于接管用户的请求作用域
var querystring = require('querystring');

class think{
    constructor(){
        
    }

    get request(){
        return request;
    }

    get response(){
        return response;
    }

    render(){
        return response.render( ...arguments );
    }

    get _get(){
        return request.query;
    }

    _post(func){
        let body = '';
        request.on('data', function (chunk) {
            body += chunk;
        });
        request.on('end', function () {
            body = querystring.parse(body);
            func(body);
        })
    }
}

module.exports = think;