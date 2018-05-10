var express = require('express');
var app = express();

//本地变量定义：app.locals 生命周期贯穿整个应用的生命周期
app.locals.title = 'my APP';
// app.locals.strftime = require('strftime');
app.locals.email = 'me@myapp.com';

//多级路由模式 app.mountpath
var admin = express();

admin.get('/',function(req,res) {
    console.log(admin.mountpath);
    res.send('Admin Homepage');
})

var secret = express();

secret.get('/',function(req,res) {
    console.log(secret.mountpath);
    res.send('Admin Secret');
})

admin.use('/secr*t',secret);
app.use(['/adm*n','/manage'],admin);//行程了一个/adm*n/secr*t和/manage/secr*t的两种路由
//在这里,创建了两个express对象,先把secret绑定到admin上,再把admin绑定到主app上.
//这样就形成了多层级路由分发.

// 事件 app.on 绑定的到sub-app上的；

admin.on('mount',function(parent) {
    console.log('Admin Mounted');
    console.log(parent);
});

admin.get('/',function(req,res) {
    // res.send('Admin Homepage');
});
app.use('/admin',admin);

//方法 app.all ，类似于app.use(),只不过是全匹配
app.all('/api/*',function(req,res) {
    res.send('hello world');
});

// 方法 app.delete
app.delete('/',function(req,res) {
    res.send('DELETE request to homepage');
});

//方法 app.disable 设置布尔值为false
app.disable('name');

app.get('name');//获取name属性的值；

app.enable('name');//设置布尔值为true

app.enabled('name');//获取name属性值

app.engine(html,engine.hoggan); // 设置模板引擎；


//路由控制
app.param(['id','page'],function (req,res,next,id) { //用于参数验证；
    // http://localhost:8083/user/4不打印"CALLED ONLY ONCE",因为被过滤了；http://localhost:8083/user/3就会打印出来；
    // if(id==3){
        console.log('CALLED ONLY ONCE');
    // }
    next();
})

app.get('/user/:id/:page',function(req,res,next) {
    console.log('although this matches');
    next();
});

app.get('/user/:id/:page',function(req,res,next) {
    console.log('and this matches too');
    res.end();
})


//内置静态方法：static,负责托管Express应用内的静态资源；
app.use('/static',express.static('resource'))







app.listen(8083,function(){
    console.log('Ready');
});