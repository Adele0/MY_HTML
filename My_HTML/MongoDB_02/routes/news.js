var express = require('express');
var router = express.Router();

//1.引入mongoose
const mongoose = require('mongoose');

//2.连接到数据库（不存在就会创建）
mongoose.connect('mongodb://127.0.0.1:27017/tamaki', function (err) {
   if (err) {
     console.log('连接错误！'+err.message);
   }else {
     console.log('连接成功！');
   }
});

//3.定义数据库中集合的骨架schema（类似关系型数据的表，table；MongoDB的collections）
var newsSchema = new mongoose.Schema({
    title : String,
    category : String,
    content : String,
    publishTime : Date,
    source : String,
    author : String,
    loved_by : String
});

//4.获得骨架模型，如果集合不存在，第一次执行时会自动添加
var newsModel = mongoose.model('news',newsSchema,'news');

//5.添加新闻的路由，表单提交post数据量大，这里方便演示使用get而已
router.get('/add',function (req,res,next) {
    //5.1实例化模型得到一个新闻实例，同时增加属性和值（实际数据应该从表单中得到，为了方便演示，写固定的内容）
    var newsInstance = new newsModel({
        title : "tamaki露肩，夏天实在太美好",
        category : "花边新闻",
        content : "欢迎来到第三音乐教室，又是仲夏时节。。。blabla",
        publishTime : new Date().toLocaleString(),
        source : "小喇叭站",
        author : "环环的小迷妹",
        loved_by : "淋酱"
    });

    //5.2保存
    newsInstance.save(function (err) {
        if (err) {
             console.log('添加失败！'+err.message);
        }else {
            console.log('添加成功！');
        }
    });
});

//6. 修改路由
router.get('/edit/:newsID',function (req,res,next) {
    //6.1接收新闻编号（实际数据应该从表单中得到，为了方便演示，get网络传参）
    var newsID = req.params.newsID;

    //6.2在数据库中查询此ID，得到此条新闻数据
    newsModel.findById(newsID,function (err,newsData) {
        //6.3 直接.修改
        newsData.title = 'Summer again, it is the best time to gaze Tamaki`s shoulders';
        newsData.category = 'gossip';
        newsData.content = 'Welcome to No.3 music classroom, Summer again, it is the best time to gaze Tamaki`s shoulders,are you ready?';
        newsData.source = 'xiaolaba';
        newsData.author = 'little cute fan of tamaki';
        newsData.loved_by = "lin_jiang"
        //6.4保存
        newsData.save(function (err) {
            if (err) {
                console.log('修改失败！'+err.message);
            }else {
                console.log('修改成功！');
            }
        });
    });
});

//7. 删除路由
router.get('/delete/:newsID',function (req,res,next) {
    //7.1接收新闻编号（实际数据应该从表单中得到，为了方便演示，get网络传参）
    var newsID = req.params.newsID;

    //7.2在数据库中查询此ID，得到此条新闻数据
    newsModel.findById(newsID,function (err,newsData) {
        //7.3 直接.删除
        newsData.remove(function (err) {
            if (err) {
                console.log('删除失败'+err.message)
            } else {
                console.log('删除成功！');
            }
        });
    });
});

//8. 查询路由
router.get('/find',function (req,res,next) {
    //8.1 在数据库中查找所有新闻的数据
    newsModel.find({},function (err,newsDataAll) {
        if (err) {
            console.log('查询失败'+err.message)
        } else {
            //8.2 一般是得到数据后用来渲染，这里演示为显示在页面
            res.send(newsDataAll);
        }
    });
});

module.exports = router;

