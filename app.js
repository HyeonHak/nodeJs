const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.listen(3000, function(){
    console.log('start');
})

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.get('/',function(req,res){
    res.sendFile(__dirname + '/public/main.html');
})

app.get('/main',function(req,res){
    res.sendFile(__dirname + '/public/main.html');
})

app.post('/email_post',function(req,res){
    console.log(req.body);
    //res.send("<h1>welcome!</h1>" + req.body.email);
    res.render('email.ejs', {'email': req.body.email});
})

app.post('/ajaxSendEmail',function(req,res){
    res.json({result: 'ok', email: req.body.email});
})
