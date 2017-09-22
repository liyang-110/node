## js中的事件练习
1. 引入events模块
    
    var events = require('events');

2. 创建eventEmitter事件发射器对象
    
    var eventEmitter = new events.EventEmitter();

3. 使用eventEmitter.on()方法绑定事件和句柄，实现监听

    eventEmitter.on（'事件', 句柄函数);

4. 使用eventEmitter.emit()方法发射事件，实现触发。

    eventEmitter.emit('事件');