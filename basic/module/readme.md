## Node.js模块系统
模块是Node.js应用程序的基本组成部分,文件和模块是一一对应的,换言之,一个Node.js文件就是一个模块.这个文件可能是JavaScript代码,JSON或者编译过的C/C++扩展.
### 创建模块
在Node.js中,创建一个模块非常简单,如下我们创建一个hello.js模块
```
//hello.js
function Hello(){
    var name;
    this.setName = function(_name){
        name = _name;
    };
    this.sayHello = function(){
        console.log('Hello '+name);
    };
}
module.exports = Hello;
```
```
//模块调用
var Hello = require('./hello');
var hello = new Hello();
hello.setName('qingcong');
hello.sayHello();
```