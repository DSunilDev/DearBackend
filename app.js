const express=require('express')
const path=require('path')

const app=express();

app.use(express.static('styles'));


app.get('/',function(req,res)
{
    res.send('<h1>HEllo</h1>')
})

app.get('/Home',function(req,res)
{
    const htmlfile=path.join(__dirname,'views','index.html')
    res.sendFile(htmlfile);
})

app.get('/Nature',function(req,res)
{
    const htmlfile=path.join(__dirname,'views','nature.html')
    res.sendFile(htmlfile);
})

app.get('/devs',function(req,res)
{
    const htmlfile=path.join(__dirname,'views','devs.html')
    res.sendFile(htmlfile);
})

app.listen(3000);