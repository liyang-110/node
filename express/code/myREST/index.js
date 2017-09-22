var express = require('express');
var app = express();
var url = require('url');
var fs = require('fs');
var path = require('path');
var jade = require('jade');
var mysql = require('mysql');
//链接数据库
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'will1314',
    port: '3306',
    database: 'myrest'
});

//数据库结果转JSON,并且发送
function result2json(result, str, res) {
    var j_data = {};
    for (var i = 0; i < result.length; i++) {
        j_data['user' + i] = {
            'id': result[i].u_id,
            'name': result[i].u_name,
            'password': result[i].u_pwd,
            'profession': result[i].u_profession
        }
    }
    res.render("list", { title: str, juser: j_data });
}

// 设置模板引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//设置路由
app.get('/listUsers', function(req, res) {
    var id = url.parse(req.url, true).query.id;
    //查询数据
    var sql = 'SELECT * FROM user_list';
    if (id != undefined) {
        sql += ' where u_id=' + id;
    }
    connection.query(sql, function(err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
        }
        result2json(result, '查询成功', res);
    });
});

//添加的新用户数据
var user = {
    "user7": {
        "name": "damjlowills",
        "password": "passuiword6",
        "profession": "firehkman",
        "id": 7
    }
};

app.get('/addUser', function(req, res) {
    var sql = 'insert into user_list (u_id,u_name,u_pwd,u_profession) values (?,?,?,?)';
    var sqlParams = [user["user7"].id, user["user7"].name, user["user7"].password, user["user7"].profession];
    connection.query(sql, sqlParams, function(err, result) {
        //插入执行后只接显示所有信息,err信息返回
        var str = (err ? err.code : '插入成功');
        sql = "select * from user_list";
        connection.query(sql, function(err, result) {
            if (err) {
                console.log('[SELECT ERROR] - ', err.message);
                return;
            }
            result2json(result, str, res);
        });
    })
});

app.get('/deleteUser', function(req, res) {

    // First read existing users.
    var id = url.parse(req.url, true).query.id;
    var sql = 'DELETE FROM user_list where u_id=' + id;
    connection.query(sql, function(err, result) {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('delete success');
            sql = "select * from user_list";
            connection.query(sql, function(err, result) {
                if (err) {
                    console.log('[SELECT ERROR] - ', err.message);
                    return;
                }
                result2json(result, '删除成功', res);
            });
        }
    })
});
app.use(express.static(path.join(__dirname, 'public')));
var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('app listening at http://%s:%s', host, port);
});