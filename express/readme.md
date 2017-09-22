# express入门
## 安装
首先假定已经安装了node.js, 接下来创建一个目录,进入此目录,并将该目录最为当前工作目录.
```
$ mkdir myapp
$ cd myapp
```
通过`npm init`命令为你的应用创建一个`package.json`文件,欲了解 package.json 是如何起作用的，请参考 [Specifics of npm’s package.json handling。](https://docs.npmjs.com/files/package.json)
    
    $ npm init
此命令将要求你输入几个参数,例如此应用的名称和版本.你可以直接按"回车"接受默认设置即可,下面这个除外:

    entry point:(index.js)
键入`app.js`或者你所希望的名称,这是当前应用的入口文件.如果你希望采用默认的`index.js`文件名,只需按'回车'即可.(此处若出问题,请检查'~/.config'目录的权限问题.)

接下来安装Express并将其保存到依赖列表中:

    $ npm install express --save
 如果只是临时安装Express,不想将他添加到依赖列表中,只需略去--save参数即可:

    $ npm install express

  > 安装 Node 模块时，如果指定了 --save 参数，那么此模块将被添加到 package.json 文件中 dependencies 依赖列表中。 然后通过 npm install 命令即可自动安装依赖列表中所列出的所有模块。
***
## Hello world实例
  > 继续之前,请务必按照**安装**章节执行了所有的前期准备工作
接下来,我们一起创建一个基本的Express应用

进入myapp目录,创建一个名为app.js的文件,然后将下列代码复制进去:
```
var express = require('express');
var app = express();
app.get('/',function(req,res){
    res.send('Hello qingcong!');
});

var server = app.listen(3000,function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('app listening at http://%s:%s',host,port);
});
```
上面代码启动一个服务并监听从3000端口进入的所有连接请求.他将所有对 ``/`` 的请求返回"hello qingcong"字符串.对于其他所有路径全部返回``404 Not Found``.
  > 可以自己增加其他的``get``绑定其他的url和方法.

  > req请求和res响应对应Node中的request和response.所以req.pipe() req.on('data',callback)及其他node提供的方法都可以使用.
通过如下命令启动此应用:

    $ node index.js
然后在浏览器中打开`http://localhost:3000/`或其他url查看输出结果.

***
## Express应用生成器
通过应用生成器工具express可以快速创建一个应用的固件.
通过如下命令安装:

    $ npm install express-generator -g
-h选项可以列出所有可用的命令行选项:

    $ express -h
     Usage: express [options] [dir]

  Options:

    -h, --help           output usage information
        --version        output the version number
    -e, --ejs            add ejs engine support
        --pug            add pug engine support
        --hbs            add handlebars engine support
    -H, --hogan          add hogan.js engine support
    -v, --view <engine>  add view <engine> support (dust|ejs|hbs|hjs|jade|pug|twig|vash) (defaults to jade)
    -c, --css <engine>   add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
        --git            add .gitignore
    -f, --force          force on non-empty directory

例如, 下面的实例就是在当前工作目录下创建一个名为myapp1的应用

    $ express myapp1
然后安装所有依赖包:

    $ cd myapp
    $ npm install
启动这个应用(MacOs或linux平台)

    $ DEBUG=myapp npm start
Windows平台

    $ set DEBUG=myapp & npm start
然后在浏览器中打开http://localhost:3000/网址就可以看到这个应用了.
通过Express应用生成器创建的应用一半都有如下目录结构:
```
    .
    ├── app.js
    ├── bin
    │   └── www
    ├── package.json
    ├── public
    │   ├── images
    │   ├── javascripts
    │   └── stylesheets
    │       └── style.css
    ├── routes
    │   ├── index.js
    │   └── users.js
    └── views
        ├── error.jade
        ├── index.jade
        └── layout.jade
    7 directories, 9 files
```
  > 使用`tree`命令可以查看目录结构
  > 通过Express应用生成器创建的应用只是众多方法中的一种, 你也可以不使用该方法.
***

## 一个简单的Express路由
*本篇只对路由做一简单介绍*

路由(Routing)是由一个URL(路径)和一个特定的HTTP方法(GET或POST等)组成,涉及到应用如何响应客户端对某个网站节点的访问.
每个路由都可以有一个或者多个处理函数,当匹配到路由时,这些函数将被执行.
路由的定义由如下结构组成:

    app.METHOD( PATH, HANDLER) 
* 其中app是一个express实例,
* METHOD是某个[HTTP请求方式](http://www.cnblogs.com/yin-jingyu/archive/2011/08/01/2123548.html)中的一个
* PATH是服务器端的路径
* HANDLER是当路由匹配时需要执行的函数.
下面代码展示了几个路由实例:
```
//对网站首页返回"Hello QingCong!"
app.get('/',function(req,res){
    res.send('Hello QingCong!');
});
//网站首页接受POST请求
app.post('/',function(req,res){
    res.setHeader('content-type', 'text/html;charset=utf-8');
    res.send('这是post请求!');
});
// /user节点接受PUT请求
app.put('/user',function(req,res){
    res.send('这是一个put请求在/user');
});
// /user节点接受DELETE请求
app.delete('/user',function(req,res){
    res.send('这是一个delete请求在/user');
});
```
***
## 利用Express托管静态文件
通过Express内置的express.static中间件就可以提供静态资源文件的访问.例如,假设public目录放置了图片,css和javascript文件,你就可以如下设置:

    app.use(express.static('public'));
现在,public目录下面的文件就可以被访问了.所有文件的路径都是相对于存放目录的,所以存放静态文件的目录名不需要出现在url中
如果你的静态资源存放在多个目录下面,可以通过多次调用express.static中间件来加载. 访问时,express.static中间件会根据目录添加顺序查找所需文件.

### 虚拟目录
如果希望通过express.static访问的文件都存放在一个虚拟目录下面(比如static),可以通过如下命令实现:

    app.use('/static',express.static('public'));
现在,就可以通过带有/static的url来访问public目录下面的内容了.

***
# Express专题
## 路由
路由是指如何定义应用的端点(URLs)以及如何响应客户端的请求.
路由是由一个URL、HHTP请求（get、post等）和若干个句柄组成，它的结构如下：