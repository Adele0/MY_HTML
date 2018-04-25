// 使用callback fn实现异步
console.log(1);

setTimeout(function () {
    console.log(2);
},3000);

console.log(3);