//Ejs TEmplate adding


const express=require('express')
const fs=require('fs')
const path=require('path')
const uuid=require('uuid')
const bcry=require('bcryptjs')
//app.use(express.json())

const db=require('./MONGO_D/database.js');
const app=express();

app.use(express.static('styles'));

app.use(express.urlencoded({extended:true}))

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
    membername.id=uuid.v4();
    const filepath=path.join(__dirname,'views','members.json')
    const filedata=fs.readFileSync(filepath)
    const memberdata=JSON.parse(filedata)
    memberdata.push(membername);
    fs.writeFileSync(filepath,JSON.stringify(memberdata));
    res.send('<h1>done</h1>')
    
})


app.get('/form',function(req,res)
{
    res.render('tt')
})

app.get('/login',function(req,res)
{
    res.render('login')
})


app.get('/admin',function(req,res)
{
    res.send("<h2>Welcome User</h2>")
})

//Signup functionality

app.post('/signup',async function(req,res)
{
    const userdata=req.body;
    const mail=userdata.mail;
    const password=userdata.password;

    const alreadyuser=await db.getDb().collection('users').findOne({email:mail})

    if(alreadyuser)
    {
        res.redirect("/login")
    }
else{
    const passwordd=await bcry.hash(password,12)

    const users={
        email:mail,
        passkey:passwordd
    };

await db.getDb().collection('users').insertOne(users);
res.redirect('/login') 
//USe it to Successful Page or Login Page
}
})

//Login Functionality

app.post('/login',async function(req,res)
{
    const userdata=req.body;
    const mail=userdata.mail;
    const epassword=userdata.epassword;

    const existdata=await db.getDb().collection('users').findOne({email:mail})

    if(!existdata)
    {
        res.redirect('/form')
    }

    const passkeycheck=await bcry.compare(epassword,existdata.passkey)

    if(!passkeycheck)
    {
        res.redirect('/form')
    }
    else{
    res.redirect('/admin')
    }
})




app.get('/User/:id',function(req,res)
{
    const memberId=req.params.id;
    const filepath=path.join(__dirname,'views','members.json')
    const filedata=fs.readFileSync(filepath)
    const memberdata=JSON.parse(filedata)
    for(const member of memberdata)
    {
        if(member.id==memberId)
        {
            return res.render('userdetail',{member:member})
        }
    }
})

app.get('/faculty',function(req,res)
{
    res.render('faculty')
})


app.get('/Nature',function(req,res)
{
    res.render('nature')
})

app.get('/devs',function(req,res)
{
    res.render('devs')
})


app.get('/tech',function(req,res)
{
    res.render('tech')
})

app.get('/Mongo',async function(req,res){
    const trains=await db.getDb('train').collection('g').find().toArray();
    res.render('traind',{ trains:trains ,trainno:trains.length,no:0})
}); 

module.exports=app;

db.connectToDatabase().then(function () {
    app.listen(3000);
  });
  
