var task = {
    listen( _task ){
        let action = _task.params.action;
        // 将当前请求上下文放入全局
        global.response = _task.res;
        global.request = _task.req;
        new _task.controller_class( )[ action ]();
    }
}

module.exports = task;