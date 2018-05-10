
var express = require('express');
var app = express();

app.get('/',function(req,res) {
	console.log('主页GET请求');
	res.send('Hello World, i want to be a famouse person!');
	
});

app.post('/',function(req,res) {
	console.log('主页POST请求');
	res.send('Hello POST');
})

app.get('/del_user',function(req,res) {
	console.log('/del_user响应');
	res.send('删除页面');
})

app.get('/ab*cd',function(req,res) {
	console.log('/ab*cd get请求');
	res.send('正则匹配');
})

app.use(express.static('resource'))

var server = app.listen(8081,function() {
	var host = server.address().address
	var port = server.address().port


	console.log("应用实例，访问地址为http://%s:%s",host,port);
})

