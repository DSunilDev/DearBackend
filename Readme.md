Hello Everyone ,

I have Specially created this for Backend 
Fuctionality to get known and keep a track of my learning progress ..

Backend is an interesting option of website building where 
a server generated the Frontend code for the visitors and 
Build more Dynamic sites like amazon.com..

response.statusCode-->Status of Web Server 200-Sucess 404-Not found
443,80-Deployment Purposes

response.end('')

''->Custom HTML code to be included..

request.url('/')-->Url requested by the user

http->BUILT IN PACKAGE FOR WEB SERVER


EXPRESS JS:

express()-->Imported as function

function(req,res,next) are the parameters

{No need to define The Status Code as Express takes care of it }

.get('/path',function()
{
    Action to be performed...
    .send('Custom Code')
})


.listen(3000)->Port connection~



