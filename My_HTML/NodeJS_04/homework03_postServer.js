//引入模块
var server = require('http').createServer(); //在http模块下创建服务器
var fs = require('fs');
var url = require('url');

server.on('request',function (req,res) {
    var requestUrl = req.url;   //获取请求地址

    if (requestUrl=='/homework03.html') { //第一次进入表单界面
        //添加表头并响应
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});

        //读取表单内容并响应
        var pageData = fs.readFileSync('homework03.html')
        res.write(pageData);

        //响应结束
        res.end();
    }

    else if (requestUrl!= '/favicon.ico') {
        var dataStream = '';

        req.on('data', function (formData) {
            dataStream += formData;
        });

        req.on('end', function () {
            console.log('post接收到的数据：',dataStream.toString());
            res.writeHead(200,{'Content-Type': 'text/html;charset=utf-8'});
            var searchParams=dataStream.toString();
            var userInfo=searchParams.split("&");

            var username=userInfo[0]; //userName=张三
            var password=userInfo[1]; //passWord=123456


            res.write(`<p>用户名是：${username.split("=")[1].toString()}</p>`);
            res.write(`<p>密码是：${password.split("=")[1]}</p>`);

            //响应结束
            res.end();
        });
    }
});

//开启服务器监听端口
server.listen(8099, function () {
    console.log('http://127.0.0.1:8099');
});
