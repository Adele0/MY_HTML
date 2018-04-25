//引入子模块a
var mainModule = require("./04moduleA");

console.log("调用a模块的变量："+mainModule.testName);

console.log("调用a模块的函数运行的结果：");
mainModule.testFn();    //需要调用，否则是undefined

var mainModule2 = require("./04moduleB");
mainModule2();