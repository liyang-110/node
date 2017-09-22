var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var user = {
        username: 'admin',
        password: '123456'
    };
    res.render('home', { title: 'Home', user: user });
});

module.exports = router;