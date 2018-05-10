
var express = require('express');
var app = express();
var fs = require('fs');

var bodyParser = require('body-parser');
var multer = require('multer');

app.use(express.static('resource'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(multer({dest:'/tmp/'}).array('image'));//?

app.get('/express_uploadfile.html',function(req,res){
    res.sendFile(__dirname+'/'+'express_uploadfile.html');
})

app.post('/file_upload',function(req,res) {

    console.log(req.files[0]);//上传的文件信息  这个console.log()会被打印在控制台中！
    var des_file = __dirname +'/'+req.files[0].originalname;
    fs.readFile(req.files[0].path,function (err,data) {
        fs.writeFile(des_file,data,function(err) { //fs.writeFile中的回调会将console.log()中的内容打印在页面中；
            if(err) {
                console.log(err);
            }else {
                response = {
                    message:'File uploaded successfully',
                    filename:req.files[0].originalname
                };
            }
            console.log(response);
            res.end(JSON.stringify(response));
        });
    });
});

var server = app.listen(8081,function() {
    var host = server.address().address
    var port = server.address().port
    console.log('应用实例，访问地址为 http://%s:%s',host,port);
})