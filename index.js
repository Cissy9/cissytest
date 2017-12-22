/**
 * Created by Cissy on 2017/12/21.
 */
var express = require('express');
var app = express();
var handlebars = require('express3-handlebars').create({defaultLayout:'main'});

//视图引擎
app.engine('handlebars', handlebars.engine);
app.set('view engine','handlebars');

//路由
//静态文件
app.use(express.static(__dirname+'/public'));

app.get('/',function(req, res){
    res.render('home');
})
app.get('/about',function(req, res){
    res.render('about',{name:'xixi'});
})

//异常处理
app.use(function(req, res, next){
    res.status(404);
    res.render('404');
})
app.use(function(err, req, res, next){
    console.log(err.stack);
    res.status(500);
    res.render('500');
})


app.listen(8003,function(){
    console.log('正在监听端口8003')
})