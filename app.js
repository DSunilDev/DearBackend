const fs=require('fs')
const path=require('path')


const express=require('express');

const app=express();

app.use(express.urlencoded({extended:false}));

app.get('/currenttime',function(request,res){
    res.send('<h1>'+ new Date().toISOString()+'</h1>')

});


app.get('/',function(request,res)
{
       res.send('<form action="/storeuser" method="POST"><label>Your Name</label><input type="text" placeholder="NAme" name="username"><button>Submit</button></form>')
})

app.post('/storeuser',function(req,res)
{
        const Username=req.body.username;
        const filepath=path.join(__dirname,'data','user.json')
        const filedata=fs.readFileSync(filepath);
        const existingusers=JSON.parse(filedata);
        existingusers.push(Username)
fs.writeFileSync(filepath,JSON.stringify(existingusers))
        res.send('<h1>Sucess</h1>')
})


app.get('/users',function(req,res)
{
    const filepath=path.join(__dirname,'data','user.json')
    const filedata=fs.readFileSync(filepath);
    const existingusers=JSON.parse(filedata);

    res.send(existingusers);
})



app.listen(3000);