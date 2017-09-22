//引入events模块
var events = require('events');
//创建eventEmitter事件发射器对象
var eventEmitter = new events.EventEmitter();

eventEmitter.on('s1', function() {
    console.log('s1事件处理完毕！');
});
eventEmitter.on('s2', function() {
    console.log('s2事件处理完毕！');
});
eventEmitter.on('s3', function() {
    console.log('s3事件处理完毕！');
});
eventEmitter.on('s4', function() {
    console.log('s4事件处理完毕！');
});
eventEmitter.on('error', function() {
    console.log('错误的事件！');
});
eventEmitter.emit(process.argv[2]);
console.log('程序执行完毕');