var fs = require('fs');
fs.readFile('./test.txt',function (err,data) {
    if(err){
        console.log('读取错误，原因：'+err.message);
    }else{
        fs.writeFile('./test.txt',data+'，这是用writeFile新增加的内容',function (err,data) {
            if (err) {
                console.log('读取成功但是追加发生错误，原因：' + err.message);
            } else {

                console.log('读取并对追加内容写入成功，返回文件进行查看');
            }
        });
    }
});