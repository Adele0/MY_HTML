var http = require('http');
var fs = require('fs');
var path = require('path');

http.get('http://sports.sina.com.cn/hdphoto/',function (res) {
    // var statusCode = res.statusCode;
    var {statusCode} = res;

    if (statusCode==200) {
        var webStr="",count=0;

        res.on('data',function (webhtml) {
            webStr+=webhtml;
        });

        res.on('end',function () {
        /* 得到网页内容后，处理爬虫爬回来的内容。
           在得到的内容中筛选需要的信息，如图片:
                <img class="s-news-img" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=739911974,509307239&amp;fm=173&amp;app=25&amp;f=JPEG?w=218&amp;h=146&amp;s=BBA6DB0162236B071AB1A8D10100A093" height="119" width="179">
           <img width="311" height="207" src="http://k.sinaimg.cn/n/sports/transform/200/w600h400/20180322/Bace-fysnevk6738329.jpg/w311h2078d2.jpg" alt="奥巴梅扬1600万镑新豪宅长这样">
           筛选后的信息中使用正则提取公共 提取模板
           将符合规则的放入数组中
           发起请求，通过管道将需要的资源拷贝到本地
        */
            var imgReg = /<img width=".*" height=".*" src="(.*)" alt=".*">/igm;
            // console.log(imgReg.exec(webStr));   // 数组第二位是需要的地址
            var imgArr = [];    //使用空数组接收满足条件的数组元素
            var imgTargets;     //由于每次只能匹配一次 需要循环，由于不知道开始和长度，只能使用while
            while (imgTargets = imgReg.exec(webStr)) {
                imgArr.push(imgTargets[1]);
            }
            console.log(imgArr);

            for(let i in imgArr) {
                var imgPath = imgArr[i];

                http.get(imgPath,function (imgData) {
                    var fileName = new Date().getTime();//为复制的文件重命名，以时间戳的方式
                    console.log(fileName);
                    var cws = fs.createWriteStream('./files/'+fileName+'.jpg');
                    imgData.pipe(cws);
                })
            }
            console.log('采集完毕');
        });
    }
}).on('error', function (err) {
    console.log('该网址不存在');
})