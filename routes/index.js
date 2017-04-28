var express = require('express');//引入express模块
var router = express.Router(); //路由

/* GET home page. */
//请求首页
router.get('/', function(req, res, next) {
    res.redirect('/layui/html/index.html')//请求首页路径
});
router.get('/schedule', function(req, res, next) {
    res.redirect('/list.html')
});


module.exports = router;
