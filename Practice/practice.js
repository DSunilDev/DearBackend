/*
const http=require('http');

function handle(request,response)
{
    if(request.url==='/sunil')
    {
        response.statusCode=200;
        response.end('<h1>Welcome Sunil</h1>'+new Date().toISOString())

    }
    else if(request.url=='/Fren')
    {
        response.statusCode=200;
        response.end('<h1> Fren ,Welcome <br> Time is </h1>'+ new Date().toISOString() )
    }
    else
    {
        response.statusCode=200;
        response.end('<h1>Anonymous User found</h1>')
    }


    response.statusCode=200;
    response.end('<marquee> Hey </marquee>')
}

const server=http.createServer(handle)

server.listen(1400);

//Custom Web Server
Express WEb server...

const express=require('express');

const app=express();

app.get('/S',function(request,response){
    response.send('<h1>Hi Sunil.You are WElcome</h1>')
})

app.get('/',function(request,response){
    response.send('<h1>Hello Anonymous USer</h1>')
})

app.listen(1400);


//Ran on Remote Machine ;-)

*/

const express=require('express')

const app=express();

app.use(express.urlencoded({extended:false}))


app.get('/form',function(req,res)
{
    res.send('<form action="/g" method="POST"><label>Age<input type="number" name="number"></label><button>Submit</button></form>')
})

app.post('/g',function(req,res)
{
    const age=req.body.number;
    console.log(age);
    res.send('<h2>We have Successfully inserted the data</h2>')
})


app.listen(1432);

//All data pops up at console in lightining speed...




















