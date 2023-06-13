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

//USER PARSING DATA TO CONSOLE

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





let fs=require('fs');
const path=require('path');


const express=require('express');
const { stringify } = require('querystring');
const app=express();

app.use(express.urlencoded({extended:false}));
app.get('/storeusers',function(req,res)
{
    res.send('<form action="/store" method="POST"><label>Name<input type="text" name="name"></label><button>Submit</Submit></form>')
})


app.post('/store',function(req,res)
{
    const Username=req.body.name;
    const filepath=path.join(__dirname,'dd','goal.json');
    const filedata=fs.readFileSync(filepath);
    const existingusers=JSON.parse(filedata);
    existingusers.push(Username);
    fs.writeFileSync(filepath,JSON.stringify(existingusers));
    res.send("<h1>Done eeh</h1>")
})


app.get('/data',function(req,res)
{
    const filepath=path.join(__dirname,'dd','goal.json');
    const filedata=fs.readFileSync(filepath);
    const existingusers=JSON.parse(filedata);
    res.send(existingusers);
})

app.listen(1432);



//Stages of Writing a File:
1.Establishing the variable with req
2.File path
3.readFileSync
4.existing users json pa r se
5.push existing users
6.writeFileSync filepath,stringify

//Readijng
2.File path
3.readFileSync
4.existing users json pa r se
Display with res.


//CONNECT HTML TO EXPRESS WITH .sendfile and path function 


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


//REFRESH REVISION

let express=require('express')
const app=express();

app.use(express.urlencoded({extended:false}));

app.get('/',function(req,res)
{
    res.send('<form action="/datagot" method="POST"><label>Name</label><input type="text" name="s"><button>Submit</button></form>')
})

app.post('/datagot',function(req,res)
{
    const name=req.body.s;
    console.log(name);
    res.send('<h1>DONEYYY</h1>')
})


app.listen(3000);


*/

const fs=require('fs')
const express=require('express')
const app=express();

const path=require('path')


app.use(express.urlencoded({extended:false}))

app.get('/',function(req,res)
{
    res.send("<h2>Loading</h2>")
}
)

app.get('/Home',function(req,res)
{
    res.send("<h1>Hello</h1>")
})



app.get('/form',function(req,res)
{
    res.send('<form action="/dd" method="POST"><label>Reading</label><input type="number" name="read"><button>Submit</button></form>')
})

app.post('/dd',function(req,res)
{
    const reading=req.body.read;
    const filepath=path.join(__dirname,'dd','goal.json')
    const filedata=fs.readFileSync(filepath)
    const existingusers=JSON.parse(filedata);
    existingusers.push(reading);
    fs.writeFileSync(filepath,JSON.stringify(existingusers));
    res.send("<h1>Suceess</h1>")
})




app.use(function(req,res)
{
    res.send("<h1>404</h1>")
})


app.listen(1400)









