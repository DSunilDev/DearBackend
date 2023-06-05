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
        console.log(Username);
        res.send('<h1>Sucess</h1>')
})




app.listen(3000);