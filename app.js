const http=require('http');

function handlerequest(request,response)
{
    if(request.url==='/currenttime')
    {
        response.statusCode=200;
        response.end('<h1>'+ new Date().toISOString() +'</h1>');
    }
    else if(request.url==='/')
    {
        response.statusCode=200;
        response.end('<h1>HEllo Worls</h1>')
    }

    response.statusCode=200;
    response.end('<h1>Hello World</h1>')

}


const server=http.createServer(handlerequest)



server.listen(3000);

//Custom NodeJs Server and Simple handle request..