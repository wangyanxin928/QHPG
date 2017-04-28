var log4js = require('log4js');
log4js.configure({
    appenders: [
        { type: 'console' },
        { type: 'file',
            filename: '../logs/run.log',
            category: 'cheese',
            maxLogSize: 1024,//文件最大1024kb
            backups: 4 }
    ]
});

var logger = log4js.getLogger('cheese');
//设置错误级别，log4js的输出级别6个: trace, debug, info, warn, error, fatal
logger.setLevel('debug');


module.exports = {
    writeDebug: function (msg) {
        if (msg == null)
            msg = "";
        logger.debug(msg);
    },
    writeInfo: function (msg) {
        if (msg == null)
            msg = "";
        logger.info(msg);
    },
    writeWarn: function (msg) {
        if (msg == null)
            msg = "";
        logger.warn(msg);
    },
    writeErr: function (msg, exp) {
        if (msg == null)
            msg = "";
        if (exp != null)
            msg += "\r\n" + exp;
        logger.error(msg);
    }
}

//logger.trace('Entering cheese testing');
//logger.debug('Got cheese.');
//logger.info('Cheese is Gouda.');
//logger.warn('Cheese is quite smelly.');
//logger.error('Cheese is too ripe!');
//logger.fatal('Cheese was breeding ground for listeria.');