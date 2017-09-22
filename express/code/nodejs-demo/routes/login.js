var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: '用户登录' });
});
router.post('/', function(req, res, next) {
    var user = {
        username: 'admin',
        password: '123456'
    };
    if (req.body.username === user.username && req.body.password === user.password) {
        res.redirect('/home');
    }
    res.redirect('/login');
});

module.exports = router;