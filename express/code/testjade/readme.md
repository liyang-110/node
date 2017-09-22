## jade测试代码
在根目录下的test.jade中增加jade代码即可
***
## jade是什么?
- 模板引擎
- 用js实现
- 供node使用

### jade安装？
nodeJs中输入以下命令

    npm install jade -g
jade -h
jade工具
推荐：online official
online html2jade
jade语法
标签
以p标签为例

p
会转换为：

<p></p>
jade能自动识别自闭和标签:

input
会转换为：

<input/>
文本
标签中添加文本

p 欢迎加入wandoujia-fe
会转换为：

<p>欢迎加入wandoujia-fe</p>
标签中嵌套标签

直接跟写html一样就行

p Welcome to wandoujia fe, we want <b>you</b>
会转换为：

<p>Welcome to wandoujia fe, we want <b>you</b></p>
标签中有大段的块内容

方式一：在标签后面添加 .

比如一段js代码，注意是script后面有一个.

script.
    console.log('Welcome to join wandoujia-fe')
    console.log('We want you')
会转换为：

<script>
    console.log('Welcome to join wandoujia-fe')
    console.log('We want you')
</script>
方式二：每段前面添加|

script
    | console.log('Welcome to join wandoujia-fe')
    | console.log('We want you')
会转换为：

<script>
    console.log('Welcome to join wandoujia-fe')
    console.log('We want you')
</script>
属性
以 ()来分割属性

a(rel="nofollow", href="http://www.wandoujia.com/join#getJobInfo=1") 招聘
会转换为：

<a rel="nofollow" href="http://www.wandoujia.com/join#getJobInfo=1">招聘</a>
注释
单行注释

// changed by yc-team 
会转换为：

<!-- changed by yc-team -->
多行注释

body
  //
      p 测试代码by yaochun
会转换为：

<body>
<!--p 测试代码by yaochun 
-->
</body>
不输出的注释

在单行注释上加一个短横线 -

//- 这段注释不会输出
p 文本测试by yaochun
会转换为：

<p>文本测试by yaochun</p>
注意： 很多文档里面提到的条件注释已经不再支持

doctype
添加一个doctype只需要doctype，然后再跟一个可选的值，默认是html

doctype html
会转换为：

<!DOCTYPE html>
注意!!!这种简写的方式已经被抛弃了~

可选值还有：

xml
transitional
srict
frameset
1.1
basic
mobile
设置id或class
标签后面跟上#id,.classname，如果没有标签则使用默认标签div

#content
p#info
a.btn
会转换为：

<div id="content"></div>
<p id="info"></p>   
<a class="btn"></a>
1个id和多个class
连着写即可

a#download-btn.btn.blue-btn
会转换为：

<a id="download-btn" class="btn blue-btn"></a>
代码
不会被缓冲代码

    - for (var i = 0; i < 3; i++)
    li wandoujia-fe
会转换为：

<li>wandoujia-fe</li>
<li>wandoujia-fe</li>
<li>wandoujia-fe</li>
被缓冲代码

    p= 'Welcome to wandoujia fe, we want you'
会转换为：

<p>Welcome to wandoujia fe, we want you</p>
这里注意一下 =默认会转义内容

p= 'Welcome to wandoujia fe, we want <b>you</b>'
会转换为：

<p>Welcome to wandoujia fe, we want &lt;b&gt;you&lt;/b&gt;</p>
如果不想被转义的，在=前面添加!

p!= 'Welcome to wandoujia fe, we want <b>you</b>'
会转换为：

<p>Welcome to wandoujia fe, we want <b>you</b></p>
使用变量
    - var name = 'yaochun'
    p my name is #{name}
会转换为：

<p>my name is yaochun</p>
如果要输出 #{},那就得使用/来转义

- var name = 'yaochun'
p my name is \#{name}
会转换为：

<p>my name is #{name}</p>
变量中的特殊字符会被转义，如：

- var name = '<script></script>'
| #{name}
会转换为：

&lt;script&gt;&lt;/script&gt;
如要得到不转义的，用!替换#来调用

    - var name = '<script></script>'
    | !{name}
会转换为：

<script></script>
|其实就是管道，一般也可以定义一段文本

循环
语法结构：

each VAL[,KEY] in OBJ
VAL是值
KEY是键，可选
OBJ是对象，array or object
数组实例

    - var jobs = ["fe", "wandoujia", "beijing", "We want you"]
    each job in jobs
        li= job
会转换为：

<li>fe</li>
<li>wandoujia</li>
<li>beijing</li>
<li>We want you</li>
对象实例

- var jobs = {"catagory" : "fe", "company" : "wandoujia", "local" : "beijing"}
each val,key in jobs
    li #{key} : #{val}
会转换为：

<li>catagory : fe</li>
<li>company : wandoujia</li>
<li>local : beijing</li>
Case
case主要的作用和js里面的switch一样

方式一 本文推荐的方式

- var apples = 1
case apples
    when 0
        p you have no apples
    when 1
        p you have an apple
    default
        p you have #{apples} apples
会转换为：

<p>you have an apple</p>
方式二

- var apples = 1
    case apples
      when 0: p you have no apples
       when 1: p you have an apple
      default: p you have #{apples} apples
方式三

有些时候，确实有需求合并一些when的情况

- var apples = 1
  case apples
    when 0
     when 1
       p you have few apples
    default
       p you have #{apples} apples
当apples这个值为0或者1的时候会转换为：

<p>you have few apples</p>
过滤器
支持markdown

注意：必须是已经安装 markdown-js 或者 node-discount

:markdown
    我们来自豌豆荚前端，欢迎有志之士加盟，简历发送至zhangyaochun@wandoujia.com
会转换为：

<p>我们来自豌豆荚前端，欢迎有志之士加盟，简历发送至zhangyaochun@wandoujia.com</p>
Mixins
无参数的mixin

mixin join
  ul
    li 我们需要一帮人
    li 喜欢前端
    li 了解前端
    li 愿意在前端不断学习奋斗的
    li 你是吗？
    li 快来加入我们把

+join()
会转换为：

<ul>
    <li>我们需要一帮人</li>
    <li>喜欢前端</li>
    <li>了解前端</li>
    <li>愿意在前端不断学习奋斗的</li>
    <li>你是吗？</li>
    <li>快来加入我们把</li>
</ul>
有参数的mixin

mixin join(company)
  ul
    li 我们 #{company} 需要一帮人
    li 喜欢前端
    li 了解前端
    li 愿意在前端不断学习奋斗的
    li 你是吗？
    li 快来加入我们 #{company} 把

+join('wandoujia')
会转换为：

<ul>
    <li>我们 wandoujia 需要一帮人</li>
    <li>喜欢前端</li>
    <li>了解前端</li>
    <li>愿意在前端不断学习奋斗的</li>
    <li>你是吗？</li>
    <li>快来加入我们 wandoujia 把</li>
</ul>
minxin中支持block

mixin join(company)
  ul
    li 我们需要一帮人
    li 喜欢前端
    li 了解前端
    li 愿意在前端不断学习奋斗的    
    if block
      block
    else  
      li 你是吗？
      li 快来加入我们把

+join('wandoujia')
  li 我们这有神马？
  li 我们这个有一帮能折腾的老师阿姨
  li 我们这有美丽的阿姨
  li 我们每周都有技术交流
  li 我们这可以用很多开源的新技术
会转换为：

<ul>
    <li>我们需要一帮人</li>
    <li>喜欢前端</li>
    <li>了解前端</li>
    <li>愿意在前端不断学习奋斗的</li>
    <li>我们这有神马？</li>
    <li>我们这个有一帮能折腾的老师阿姨</li>
    <li>我们这有美丽的阿姨</li>
    <li>我们每周都有技术交流</li>
    <li>我们这可以用很多开源的新技术</li>
</ul>
minxin中还支持attributes

mixin link(href, name)
  a(class!=attributes.class, title!=attributes.title, href=href)= name

+link('http://wandoujia.com/join', '豌豆荚前端招聘')(class="btn", title="招聘啦，小伙伴快来点")  
会转换为：

<a title="招聘啦，小伙伴快来点" href="http://wandoujia.com/join" class="btn">豌豆荚前端招聘</a>
包含
有点类似freemaker，通过include来载入一些jade模板

著作权归作者所有。
商业转载请联系作者获得授权,非商业转载请注明出处。
原文: http://www.w3cplus.com/html/jade.html © w3cplus.com