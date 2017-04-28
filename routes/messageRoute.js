/*
 2017年4月26日 09:00:40
 byx
 进度的route层
 * */

var express = require('express');
var router = express.Router();

var messageService = require('../service/messageService');

//  发送短信
//TODO 同时支持get,post
router.get('/sendMessage', function (req, res, next) {
    messageService.sendMessage(req, res, next);
});

module.exports = router;

