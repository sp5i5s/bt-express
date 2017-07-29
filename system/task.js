var task = {
    listen( _task ){
        let action = _task.params.action;
        new _task.controller_class( _task.req,_task.res )[ action ]();
    }
}

module.exports = task;