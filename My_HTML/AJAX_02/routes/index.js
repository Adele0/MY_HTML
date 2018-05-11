var express = require('express');
var router = express.Router();


//------------------------------------------------------------

//1. 引入
var mongoose = require('mongoose');

//2. 链接数据库
mongoose.connect('mongodb://127.0.0.1:27017/itsource',(err)=>{
    if(err){
        console.error("链接错误！"+err.message);
    }
    else{
        console.log("链接成功！！！！！");
}
});

//3. 定义数据库中集合的骨架：（类似于关系型数据库的表的列名称）
var pcaSchema =new mongoose.Schema({
    name: String,
    code: Number,
    parentcode: Number
});

//4. 得到骨架的模型，如果集合不存在，第一次执行时会自动添加
var pcaModel= mongoose.model('pca', pcaSchema,'pca');


//获得省市县的信息的路由
router.get('/pca', function(req, res) {
   var parentcode = req.query.parentcode;
    console.log(parentcode);
    pcaModel.find({"parentcode":parentcode},function (err,pcaData) {
      res.send(pcaData);
    })
});

module.exports = router;
