var express = require('express');
var router = express.Router();

//get方式验证--用户名
router.get('/check/:username', function(req, res) {
    var username = req.params.username;   //接收从前台获得的需要验证的数据

    if(username=="admin"){  //实际应该是在数据库中进行动态验证，但是这里为了方便基础演示
        res.json({success:-1,message:"用户名已存在"});
    }
    else{
        res.json({success:0,message:"√"});
    }
});

//post方式验证--用户名
router.post('/checkpost', function(req, res) {
    var username = req.body.username;   //接收从前台获得的需要验证的数据

    if(username=="admin"){  //实际应该是在数据库中进行动态验证，但是这里为了方便基础演示
        res.json({"success":-1,"message":"用户名已存在"});
    }
    else{
        res.json({"success":0,"message":"√"});
    }
});


//get方式验证--邮箱
router.get('/verify/:email', function(req, res) {
    var email = req.params.email;   //接收从前台获得的需要验证的数据

    if(email=="438296186@qq.com"){  //实际应该是在数据库中进行动态验证，但是这里为了方便基础演示
        res.json({success:-1,message:"用户名已存在"});
    }
    else{
        res.json({success:0,message:"√"});
    }
});



//------------------------------在数据库中验证-----------------------------------------------------
// 1.引入mongoose来操作数据库
var mongoose = require('mongoose');

// 2.链接数据库
mongoose.connect('mongodb://127.0.0.1:27017/itsource',function (err) {
    if (err) {
        console.log('链接失败');
    }else{
        console.log('链接成功');
    }
});

//3. 定义数据库中集合的骨架即，需要的数据：（类似于关系型数据库的表的列名称）
var userSchema = new mongoose.Schema({
    username : String,
    password : String,
    email: String,
    phone : String
});

//4. 创建模型，itsource数据库里现在没有这类骨架的collections
var userModel = mongoose.model('users',userSchema,'users');

//5. 设置查询username的路由
router.get('/findUsername', function(req, res) {
    var username = req.query.username;   //接收从前台？username=username.value的值，需要使用query来获得的需要验证的数据
    console.log(username);
    userModel.find({'username':username}, function (err,userData) {
        if (err) {
            console.log('用户名数据获取失败');
        }else {
            res.json(userData); //将获取的用户名参数响应返回
        }
    })
});


module.exports = router;
