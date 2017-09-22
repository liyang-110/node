# JSON
## JSON简介
- json  JavaScript Object Notation(JavaScript对象表示法)
- json是轻量级的文本数据交换格式
- 独立于语言
- 具有自我描述性,更易理解
- 是存储和交换文本信息的语法,类似XML
- 比XML更小,更快,更易解析.
```
//JSON举例
{
    'site':{
        {'name':'青葱科技','url':'www.helloqingcong.com'},
        {'name':'泥巴教育','url':'www.nibaedu.com'},
        {'name':'泥巴创客','url':'www.nibaspace.com'},
        {'name':'谷歌','url':'www.google.cn'}
    }
}
//这是一个包含四个站点记录的数组
```
> 因为JSON在语法上与创建JavaScript对象的代码相同, 所以无需解析器,可以只接使用JSON数据来生成原生的JavaScript对象
***
## 语法
### 语法规则
- 数据在 名称/值 对中.
- 数据由逗号分隔
- 大括号保存对象
- 中括号保存数组
### 名称/值 对
- 名称和值使用 **:** 分割
- 名称/值 都需要引号.
- 可以使用布尔值和null, 不需要引号
### JSON文件
- 文件类型是 ".json"
- MIME类型是 "application/json"
### 相关函数
- JSON.parse()
    用于将一个JSON字符串转换为JavaScript对象
- JSON.stringfy()
    用于将JavaScript值转换为JSON字符串