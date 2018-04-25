var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '这是首页' });
});

router.get('/news', function(req, res, next) {
    res.send('首页下的新闻中心');
});

module.exports = router;
