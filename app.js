var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//声明页面路由
var routes = require('./routes/index');
//声明接口路由
var baseDataRoute = require('./routes/baseDataRoute');//基础数据模块路由
var scheduleRoute = require('./routes/scheduleRoute');//进度模块路由
var messageRoute = require('./routes/messageRoute');//短信服务路由

var app = express();

// 关于首页的设置
app.use(express.static(path.join(__dirname, 'views')));

//定义页面路由访问名称
app.use('/', routes);

//设置跨域访问接口，放到页面声明之后
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
//定义接口路由访问名称
app.use('/QHPG/page/baseDataController', baseDataRoute); // 自定义cgi路径
app.use('/QHPG/page/scheduleController', scheduleRoute); // 关于答题进度的路由
app.use('/message', messageRoute); // 关于发送短信的路由


module.exports = app;
