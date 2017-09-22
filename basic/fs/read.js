var fs = require('fs');
if (fs.existsSync('inputs')) {
    /*
    //同步读取
    var data = fs.readFileSync('inputs');
    if (data == null) {
        console.log('读取失败!');
    } else {
        console.log(data.toString());
    }*/
    fs.readFile('inputs', function(err, data) {
        if (err) {
            console.log('读取失败:' + err);
        } else {
            console.log(data.toString());
        }
    });
} else {
    console.log('文件不存在!');
}
console.log('读取完成!');