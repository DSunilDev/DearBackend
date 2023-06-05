//Ejs TEmplate adding


const express=require('express')
const fs=require('fs')
const path=require('path')

const app=express();

app.use(express.static('styles'));

app.use(express.urlencoded({extended:false}))


app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.get('/',function(req,res)
{
    const filepath=path.join(__dirname,'views','members.json')
    const filedata=fs.readFileSync(filepath)
    const memberdata=JSON.parse(filedata)
    res.render('index',{ numberofMembers:memberdata.length,members:memberdata});
})


app.get('/userdetail',function(req,res)
{
    const filepath=path.join(__dirname,'views','members.json')
    const filedata=fs.readFileSync(filepath)
    const memberdata=JSON.parse(filedata)
    res.render('/userdetail.ejs',{ members:memberdata})
})

app.get('/Home',function(req,res)
{
    res.render('index')
})

app.get('/data',function(req,res){
    const filepath=path.join(__dirname,'views','members.json')
    const filedata=fs.readFileSync(filepath)
    const memberdata=JSON.parse(filedata)
    res.send(memberdata);

})


app.post('/Home',function(req,res)
{
    const membername=req.body;
    const filepath=path.join(__dirname,'views','members.json')
    const filedata=fs.readFileSync(filepath)
    const memberdata=JSON.parse(filedata)
    memberdata.push(membername);
    fs.writeFileSync(filepath,JSON.stringify(memberdata));
    res.send('<h1>done</h1>')
    
})



app.get('/User/:id',function(req,res)
{
    const memberId=req.params.id;
    const filepath=path.join(__dirname,'views','members.json')
    const filedata=fs.readFileSync(filepath)
    const memberdata=JSON.parse(filedata)
    res.render('userdetail',{mid:memberId ,members:memberdata})
})


app.get('/Nature',function(req,res)
{
    res.render('nature')
})

app.get('/devs',function(req,res)
{
    res.render('devs')
})

app.listen(3000);