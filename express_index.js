var express = require('express');
var app = express();
var bodyParser = require('body-parser');//POST方法下引入；

var urlencodedParser = bodyParser.urlencoded({extend:false});//POST方法下引入；

app.use(express.static('resource'));

app.get('/express_index.html',function(req,res){
	res.sendFile(__dirname+ '/' + 'express_index.html');
})

// app.get('/process_get',function(req,res) {
// 	//输出JSON 格式
// 	var response = {
// 		'first_name':req.query.first_name,
// 		'last_name':req.query.last_name
// 	};
// 	console.log(response);
// 	res.end(JSON.stringify(response));

// })

app.post('/process_get',function(req,res) { //POST方法
	//输出JSON 格式
	var response = {
		'first_name':req.query.first_name,
		'last_name':req.query.last_name
	};
	console.log(response);
	res.end(JSON.stringify(response));

})

var server = app.listen(8082,function() {

	var host = server.address().address
	var port = server.address().port

	console.log('应用实例，访问地址为http://%s:%s',host,port);

})