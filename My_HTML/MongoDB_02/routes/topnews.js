var express = require('express');
var router = express.Router();

//1.引入mongoose
const mongoose = require('mongoose');

//2.连接到数据库（不存在就会创建）
mongoose.connect('mongodb://127.0.0.1:27017/itsource', function (err) {
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
    count : Number
});

//4.获得骨架模型，如果集合不存在，第一次执行时会自动添加
var newsModel = mongoose.model('topnews',newsSchema,'topnews');

//5.添加新闻的路由
router.post('/add',function (req,res) {
    /*5.1 用变量接收表单post过来的值(不需要动态更改的值不获取）
          由于多处都要使用，又不能放全局，直接在实例化中直接获得
    */

    //5.2 实例化模型得到一个新闻实例
        var newInstance = new newsModel({
            title : req.body.title,
            category : req.body.category,
            content : req.body.content,
            publishTime : new Date().toLocaleString(),
            source : req.body.source,
            author : req.body.author,
            count : 0
        });

    //5.3 保存
        newInstance.save(function (err) {
        if (err) {
            console.log('添加失败！'+err.message);
        }else {
            //重定向，在页面添加的时候，获得数据，进行跳转
            res.redirect('/topnews/list');
        }
    });
});

//6. 修改路由
router.post('/edit/:newsID',function (req,res) {
    //6.1接收新闻编号,不需要用户看到，使用隐藏域
    var newsID = req.body.newsID;

    //6.2在数据库中查询此ID，得到此条新闻数据
    newsModel.findById(newsID,function (err,newsData) {
        //6.3 直接.修改需要修改的信息
        newsData.title = req.body.title;
        newsData.category = req.body.category;
        newsData.content = req.body.content;
        newsData.source = req.body.source;
        newsData.author = req.body.author;

        //6.4保存
        newsData.save(function (err) {
            if (err) {
                console.log('修改失败！'+err.message);
            }else {
                //重定向，在页面修改的时候，获得数据，进行跳转
                res.redirect('/topnews/list');
            }
        });
    });
});

//7. 删除路由
router.get('/delete/:newsID',function (req,res) {
    //7.1接收新闻编号
    var newsID = req.params.newsID;

    //7.2在数据库中查询此ID，得到此条新闻数据
    newsModel.findById(newsID,function (err,newsData) {
        //7.3 直接.删除
        newsData.remove(function (err) {
            if (err) {
                console.log('删除失败'+err.message)
            } else {
                //重定向，在页面删除后，进行跳转
                res.redirect('/topnews/list');
            }
        });
    });
});

//8. 查询路由
router.get('/list',function (req,res) {
    //8.1 在数据库中查找所有新闻的数据
    newsModel.find({},function (err,newsDataAll) {
        if (err) {
            console.log('查询失败'+err.message)
        } else {
            //8.2 得到数据后用来渲染
            var newsJSON = {webTitle:"新闻列表",newsDataAll:newsDataAll};
            res.render("indexBak",newsJSON);
        }
    });
});

//9. 显示单条新闻的具体内容
router.get('/show/:newsID',function (req,res) {
    //9.1接收新闻编号
    var newsID = req.params.newsID;

    //9.2在数据库中查询此ID，得到此条新闻数据
    newsModel.findById(newsID,function (err,newsData) {
        if (err) {
            console.log('详情查询失败'+err.message)
        } else {
            //9.2 得到数据后用来渲染
            res.render("newsView",{newsData:newsData});
        }
    });
});


module.exports = router;

