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