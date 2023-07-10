Hello Everyone,

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

.post()-->Handles the form connection

.use(express.static)

.sendFile

fs-->File System

path-->For Path creation

path.join(__dirname,'','end-file')

.listen(3000)->Port connection~

EJS:

.render();


<% Looping condition{only starting} %>
Html Code

{ %= VARIABLE RETURNS VALUE %}

{% } %>

{%- HTML CODE %}

<% include('end-file') %> -->Reduce the HTML total  Code

.redirect-->Redirect to the Site after the operation..

.status()-->Convey Status Code to the Browser..


404->Not found 500-->Error Occured..

401->User Authentication Error..

Code Refactoring::
Definitions in one place and rightly accessing the variables ..

Variable Scoping:
Can Use Variable Shadowing of outer variable inside the Nested Code..
