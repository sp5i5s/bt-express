var fs = require('fs');
var path = require('path');

var utils = function(){}
var floder  = [];
utils.prototype = {
    // 日志输出
    log( param ){
        console.log( param );
    },
    // 遍历某个路径下的所有文件
    get_folder_files( globPath ){
        var files = fs.readdirSync( globPath );
        for(let file of files){
            let file_path = globPath + path.sep + file;
            // 递归所有子文件
            if( fs.statSync(file_path).isDirectory() ){
                this.get_folder_files( file_path )
            }else{
                floder.push( file_path );
            }
        }
        return floder;
    }
}

global.utils = new utils();