//引入模块A B（注意路径）
var getA = require("./03exportsA");
getA.fnA();

var getB = require("./03exportsB");
getB.fnB();