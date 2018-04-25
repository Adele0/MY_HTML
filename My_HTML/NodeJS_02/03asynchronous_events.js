// 使用events实现异步
console.log(1);

var events = require('events');
var e = new events.EventEmitter();
e.on('test',function(){
    setTimeout(function(){
        console.log(2);
    },200);
});
e.emit('test'); //不要忘记调用

console.log(3);