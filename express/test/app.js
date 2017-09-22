var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');
var url = require('url');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//添加的新用户数据
var user = {
    "user4": {
        "name": "mohit",
        "password": "password4",
        "profession": "teacher",
        "id": 4
    }
};
app.get('/addUser', function(req, res) {
    // 读取已存在的数据
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data) {
        data = JSON.parse(data);
        data["user4"] = user["user4"];
        console.log(data);
        res.end(JSON.stringify(data));
    });
});
app.get('/listUsers', function(req, res) {
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data) {
        var id = url.parse(req.url, true).query.id;
        if (id == undefined) {
            res.end(data);
        } else {
            data = JSON.parse(data);
            res.end(JSON.stringify(data['user' + id]));
        }
    });
});

app.get('/deleteUser', function(req, res) {

    // First read existing users.
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data) {
        data = JSON.parse(data);
        delete data["user" + 2];

        console.log(data);
        res.end(JSON.stringify(data));
    });
})
app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;