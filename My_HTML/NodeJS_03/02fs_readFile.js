var fs = require('fs');
fs.readFile('./01buffer.js',function (err,data) {
    if(err){
        console.log('读取错误，原因：'+err.message);
    }else{
        console.log('读取到的文件数据是：'+data);
    }
});