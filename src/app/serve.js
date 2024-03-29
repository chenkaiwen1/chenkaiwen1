var http = require('http');//引入http包
var url = require('url');
var USERS = [{
    username: 'chenkaiwen',
    password: '123456'
}];

http.createServer(function (request, response) {
    //解析请求，包括文件名
    var pathname = url.parse(request.url).pathname;

    //输出请求的文件名
    console.log("请求消息" + pathname + "收到.");
    console.log("请求类型" + request.method.toUpperCase());

    if (pathname == '/login') {
        if (request.method.toUpperCase() != 'GET') {
            //postdata表示用户提交上来的数据
            var postdata = '';
            //当接收到'data'事件的时候，将data添加到postdata
            request.addListener('data', function (data) {
                postdata += data;
            });

            //当接收完成（'end'事件），则进行验证处理
            request.addListener('end', function () {
                console.log(postdata);
                //首先将字符串解析成JSON对象
                var user = JSON.parse(postdata);
                //允许跨域访问
                response.writeHead(200, {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                });
                //验证用户名、密码和pin码
                if (user.username === USERS[0].username &&
                    user.password === USERS[0].password) {
                    //成功返回{"success":true,"errorCode":0}对象
                    response.write('{"success":true,"errorCode":0}');
                }
                else {
                    //失败则返回{"success":false,"errorCode":100}对象
                    response.write('{"success":false,"errorCode":100}')
                }
                //响应结束
                response.end();

            });
        }
        else {
            response.writeHead(200, {
                'Content-Type': 'application/json',//返回类型为JSON类型
                'Access-Control-Allow-Origin': '*' //允许跨域访问
            });

            response.write(JSON.stringify(USERS));
            response.end();
        }
    }
    else {
        response.write("Hello,it's my web serve!");
        response.end();
    }

}).listen(8082);

console.log("启动web服务器，监听8082端口！");
