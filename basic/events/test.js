var events = require('events');
var lhn = new events.EventEmitter();

lhn.on('sign1', function() {
    console.log('服务客人');
});
lhn.on('sign2', function() {
    console.log('饭做完了');
    lhn.emit('sign3');
});
lhn.on('sign3', function() {
    console.log('接收到信号3');
});

lhn.emit(process.argv[2]);