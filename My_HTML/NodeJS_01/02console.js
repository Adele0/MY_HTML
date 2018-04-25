console.log("日志输出");

console.error("错误输出，颜色不一样");

console.time('for');    //计时开始位置
for(var i=0;i<1000;i++){
    if(i%5 == 0){
        console.log('满足条件的i',i);
    }
}
console.timeEnd('for'); //计时结束位置

var age=20,age1=22;
console.assert(age>=age1,'不满足要求，前面的人年纪太小了');