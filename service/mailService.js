/**
 * Created by wyx on 2017/4/27.
 */
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'qq',
    auth: {
        user: '1006888910@qq.com',
        pass: 'kblabqgrhwowbeid'
    }
});
var mailOptions = {
    from: '1006888910@qq.com', // 发送者
    to: '393557627@qq.com', // 接受者,可以同时发送多个,以逗号隔开
    subject: 'nodemailer2.5.0邮件发送', // 标题
    text: 'Hello world', // 文本
    html: '<h2>nodemailer基本使用:</h2><h3><a href="http://blog.csdn.net/zzwwjjdj1/article/details/51878392">http://blog.csdn.net/zzwwjjdj1/article/details/51878392</a></h3>'

    //带附件的发送目前跟我们的业务没有关联
    /*
    attachments:[
        {
            filename : 'package.json',
            path: './package.json'
        },
        {
            filename : 'content',
            content : '发送内容'
        }
    ]
    */
};

transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('发送成功');
});