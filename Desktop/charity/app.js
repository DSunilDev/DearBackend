const express=require('express')
const path=require('path')
const bcry=require('bcryptjs')
const multer = require('multer');

const app=express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(express.static('css'));
app.use(express.static('fonts'));

app.use(express.static('js'));
app.use(express.static('img'));
app.use(express.static('images'));

app.get('/',function(req,res)
{
    res.render('index')
})


app.get('/contact',function(req,res){
    res.render('contact')
})

app.get('/services',function(req,res){
    res.render('services')
})


app.get('/about',function(req,res)
{
    res.render('about')
})

app.get('/Gallery',function(req,res){
    res.render('gallery')
})

app.get('/Post',function(req,res)
{
    res.render('posts')
})

app.listen(500)