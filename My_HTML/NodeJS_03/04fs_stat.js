var fs = require('fs');
fs.stat('./test.txt',function (err,stats) {
    if(err){
        console.log('状态获取失败，原因：'+err.message);
    }else{
        // console.log('所有的状态信息：',stats);
       /* Stats {
            dev: 2895541940,
                mode: 33206,
                nlink: 1,
                uid: 0,
                gid: 0,
                rdev: 0,
                blksize: undefined,
                ino: 1407374883651668,
                size: 66,
                blocks: undefined,
                atimeMs: 1521614224301.8599,
                mtimeMs: 1521614606977.6348,
                ctimeMs: 1521614606977.6348,
                birthtimeMs: 1521614201968.0554,
                atime: 2018-03-21T06:37:04.302Z,
                mtime: 2018-03-21T06:43:26.978Z,
                ctime: 2018-03-21T06:43:26.978Z,
                birthtime: 2018-03-21T06:36:41.968Z }
       */
       if(stats.isFile()){
           console.log('这个文件的大小是：'+stats.size+'字节,修改时间'+stats.mtime.toLocaleString());
       }else if(stats.isDirectory()) {
           console.log("这是一个目录");
       }
    }
});