//通过输入的网站，判断网站是否正确，再根据状态码的来获取内容。

//引入http模块
var http = require('http');

//使用http.get()方法

http.get('http://www.baidu.com',function (res) {     //网址正确需要执行的内容
    //根据状态码来获取内容
    // var statusCode = res.statusCode;
    var {statusCode} = res;

    if (statusCode==200) {
        var webStr="",count=0;

        res.on('data',function (webhtml) {
            webStr+=webhtml;
            count++;
        });

        res.on('end',function () {
            console.log(`拼接了${count}次`);
            console.log('-----------得到的结果是：-----------');
            console.log(webStr);
        });
    }
}).on('error', function (err) { //网址错误需要执行的内容
    console.log('该网址不存在');
})