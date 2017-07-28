var fs = require('fs');

var utils = function(){}

utils.prototype = {
    // 日志输出
    log( param ){
        console.log( param );
    },
    // 遍历某个路径下的所有文件
    get_folder_files( globPath ){
        var floder  = [];
        var files = fs.readdirSync( globPath );
        for(let file of files){
            floder.push( globPath + '\\' + file );
        }
        return floder;
    }
}

global.bt = new utils();