var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
    var filepath = path.join(__dirname, '../src/info.txt');

    fs.readFile(filepath, function(err, result) {
            if (err) {
                console.log(err.code);
                return;
            } else {
                res.setHeader('content-type', 'text/html;charset=utf8'); //设置返回页面字符集
                res.end(result); //返回读取结果
            }
        })
        //res.render('index', { title: 'Express' });
});

module.exports = router;