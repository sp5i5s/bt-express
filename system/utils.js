var fs = require('fs');
var path = require('path');

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
            floder.push( globPath + path.sep + file );
        }
        return floder;
    }
}

global.utils = new utils();