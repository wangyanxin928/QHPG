﻿学习地址：http://www.alloyteam.com/2015/03/sexpressmysql/comment-page-1/?utm_source=tuicool&utm_medium=referral#comments
/*baiyuxi 2017年3月29日 14:09:07*/
1. 目录解析：
    bin/www         程序启动文件，设置端口
    conf            数据库配置，描述数据库链接的基本信息
    dao             接口的dao层，该层由service层调用，每个模块的数据库操作文件均在此目录
                    注：1.将 数据库操作 与 sql 语句分别存放，各为一个文件，如较多，可再次进行目录分级
                        2.该层不做 req、res的操作，所有参数均由service传入，数据操作结构通过回调函数原封不动返回，不做判断
                        3.该层还需要进行错误处理的封装，目前暂无
    libs            第三方库的存放，如：通用的微信接口调用
    logs            该目录存放程序运行日志，由两个文件构成：a.[http.log]存放http访问日志;b.[runlog]存放代码打印{logHelp.writeNNNN}日志
    mode_modules    该目录存放npm安装的nodejs系统包
    public          该目录存放页面依赖的js、css、img等,暂不使用
    routes          该目录存放路由文件，等同于java-springMVC的controller
    service         该目录存放模块的业务处理层，做业务逻辑处理的代码存放，承上{route}启下{dao},严格分离route与dao
    util            该目录存放工具类
    views           该目录存放页面模版、前台js
    app.js          程序的主入口，配置了程序的：1.页面访问路由;2.接口访问路由;3.以及其它需要在程序启动后初始化的代码;
    package.json    项目的包管理文件，描述了项目依赖的nodejs系统包，已经项目的版本信息

2. 访问地址(此处模拟user模块的增删改查操作)：
    只有更新接口使用的是post，其它接口都是get。所以其它接口可以通过
    直接输入URL地址访问
    增加 http://localhost:3000/users/addUser?name=XXX&age=12
    删除 http://localhost:3000/users/deleteUser?id=3
    查询全部 http://localhost:3000/users/queryAll
    ID查询 http://localhost:3000/users/queryById?id=1
    修改 http://localhost:3000/users，会返回一个页面。通过表单模拟一个post请求


3.安装新的包，命令：npm install <pkg> -save
   注：加上 -save  会更新当前包管理 package.json

4.routes 的 wx.js  集成了微信的相关方法

5.测试123