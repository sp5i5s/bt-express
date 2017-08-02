var redis   = require('redis');

if( 'options' in _config){
    if( 'redis' in _config.options){
        // 配置为全局DB配置文件
        global._config.redis = { };
        global._config.redis.config = _config.options.redis;
        // 查询类构造
        global.redis = redis.createClient(global._config.redis.config.port, global._config.redis.config.server);
        global.redis.on('error',error => {
            throw('redis 连接失败');
        })
    }
}