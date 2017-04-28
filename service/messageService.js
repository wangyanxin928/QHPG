// service/messageService.js
// 发送短信的服务
var $util = require('../util/util');
var MessageXSend = require('../libs/messageXSend');

// 日志
var logHelp = require("../libs/logHelper");
module.exports = {
    //短信发送的Token验证,返回加密后的echostr，方可验证成功
    sendMessage: function (req, res, next) {

        var telNumArr = ['18911988044'];
        var sendNums = 0;
        telNumArr.forEach(function (item, index) {

            var messageXSend = new MessageXSend();
            messageXSend.add_to(item);
            messageXSend.set_project('TTS7Y4');
            // messageXSend.vars = {code: 'YOU ARE NO1.'};

            messageXSend.xsend(function (body) {
                sendNums = sendNums + 1;
                var resultBody = {tel: item, sendTime: new Date(), returnData: {}};
                if (body.status == 'success') {
                    $util.resJSON.result = $util.resConfig.ok;
                    resultBody.returnData = JSON.parse(body);
                    $util.resJSON.resultdata.push(resultBody);
                } else {
                    $util.resJSON.result = $util.resConfig.fail;
                    resultBody.returnData = JSON.parse(body);
                    $util.resJSON.resultdata.push(resultBody);
                }

                if (sendNums == telNumArr.length) {
                    res.json($util.resJSON);
                }
            });


        })

    }

};
