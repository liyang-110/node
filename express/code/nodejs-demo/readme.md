## express demo  
带ejs模板引擎 //安装express -e nodejs-demo  //-e参数表示使用ejs模板引擎
带jquery
带bootstrap
### 路由功能
 访问路径 | 页面 | 描述
--------|------|-----
 / | index.html | 不需要登录,可直接访问
 /home | home.html | 必须用户登录后,才可以访问
 /login | login.html | 登录页面,用户名密码输入正确,自动跳转到home.html
 /logout | 无 | 退出登录后,自动回到index.html页面
 
打开app.js文件,增加如上路由配置
```
app.get('/',routes.index);
app.get('/home',routes.home)
app.get('/login',routes.login);
app.post('/login',routes.dologin);
app.get('logout',routes.logout);
```
打开routes/index.js文件,增加对应的方法.