 var name="zhangsan";
 function moduleA() {
     console.log("名字是："+name);
 }

 // console.log(arguments);
 //    console.log(arguments.callee.toString());

 /*
    function (exports, require, module, __filename, __dirname) {  var name="zhangsan";
         function moduleA() {
             console.log("名字是："+name);
         }
         console.log(arguments.callee.toString());
     }
*/



 module.exports.testName = name;    //通过模块对象的子对象exports导出变量
 module.exports.testFn = moduleA; //导出函数