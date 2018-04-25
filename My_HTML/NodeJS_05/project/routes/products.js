var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('这是产品首页');
});

router.get('/item', function(req, res, next) {
    res.send('这是产品首页下的产品子项');
});

router.get('/item/details', function(req, res, next) {
    res.send('产品子项详情');
});

module.exports = router;