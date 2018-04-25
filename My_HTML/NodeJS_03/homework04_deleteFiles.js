//题目： 使用代码删除某个不为空的文件夹

var fs = require('fs');

//定义一个含有文件路径作为的参数的函数
function delFile (filepath){
    //读取该文件路径下的子类
    var fileArr = fs.readdirSync(filepath);
    // console.log(fileArr);    获得的是该文件夹下的一个子集文件和文件夹名
//    遍历该集合
    for(var i in fileArr) {  //循环用来删除子类文件和文件夹
    //    将得到的文件名，拼接为路径
        var subCon = filepath+'/'+ fileArr[i];
    //   判断得到的路径属于文件还是文件夹
        var conStat = fs.statSync(subCon);
        if (conStat.isFile()) { //是文件的话，直接删除
            fs.unlinkSync(subCon);
            console.log(subCon + " 文件删除成功！");
        }else{  //是文件夹的话，再次调用函数
            delFile(subCon);
        }
    }

    fs.rmdirSync(filepath);
    console.log(filepath + " 根目录删除成功！");
}

delFile('test2');