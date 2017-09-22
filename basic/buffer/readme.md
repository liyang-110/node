## node.js的buffer类练习
JavaScript语言本身没有连续二进制数据类型。因此，在Node.js内核中，定义了一个Buffer类，专门用于存放二进制数据的缓存区。
***
### 创建Buffer类
- 方法1. 创建长度为10字节的Buffer

    var buf = new Buffer(10);

- 方法2. 通过给定的数组创建Buffer实例

    var buf = new Buffer([10,20,30,40]);

- 方法3. 通过一个字符串来创建Buffer实例

    var buf = new Buffer('www.helloqingcong.com','utf-8');

***
### 写入缓冲区
#### 语法

    buf.write(string[, offset[, length]][, encoding])

#### 参数
-   string 写入缓冲区的字符串
-   offset 缓冲区开始写入的索引值,默认为0
-   length 写入的字节数,默认为buffer.length
-   encoding 使用的编码. 默认为utf8

#### 返回值
返回实际写入的大小.如果buffer空间不足,则只会写入部分字符串.
#### 举例
```
buf = new Buffer(256);
len = buf.write('www.helloqingcong.com');
console.log('写入字数' + len);
```
***
### 从缓冲区读取数据
#### 语法

    buf.toString([encoding[,start[,end]]]);
#### 参数
- encoding 使用的编码
- start 指定开始读取的索引位置,默认为0
- end 结束位置,默认为缓冲区的末尾
#### 返回值
解码缓冲区数据并使用指定的编码返回字符串
#### 实例
```
buf = new Buffer('www.helloqingcong.com');

console.log(buf.toString());
console.log(buf.length);
```