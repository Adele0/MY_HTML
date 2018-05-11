var express = require('express');
var router = express.Router();

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
var newsSchema =new mongoose.Schema({
    title: String,
    category: String,
    content: String,
    publishDate: Date,
    source: String,
    author: String,
    count: Number
});

//4. 得到骨架的模型，如果集合不存在，第一次执行时会自动添加
var newsModel= mongoose.model('topnews', newsSchema,'topnews');

//5. 查出所有新闻的路由
router.get("/list",function(req, res){
    //5-1. 在数据库中查找所有新闻的数据
    newsModel.find({},function (err,newsDataAll) {
        //5-2. 发送数据去前端请求的页面
        // console.log(newsDataAll);
        res.send(newsDataAll);
    });
});


//6. 查出指定ID的新闻的路由
router.get("/show/:newsID",function(req, res){
    var newsID = req.params.newsID; //获得参数ID

    newsModel.findById(newsID,function (err,newsDataAll) {
        res.send(newsDataAll);
    });
});



module.exports = router;
