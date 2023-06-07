const express=require('express')


const app=express();

app.use(express.urlencoded({extended:false}))

app.get('/',function(req,res){
    res.send('<form action="/submit" method="POST"><h1>Name</h1><input type="text" name="name"><button>Submit</button>')
})

app.post('/submit',function(req,res)
{
    const data=req.body.name;
    console.log(data);
    res.send("<h2>Done eh</h2>")
    
})

app.listen(1560);