// System基类，用于接管用户的请求作用域

class think{
    constructor(){
        
    }

    get request(){
        return request;
    }

    get response(){
        return response;
    }
}

module.exports = think;