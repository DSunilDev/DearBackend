const http=require('http');

function handle(request,response)
{
    response.statusCode=200;
    response.end('<marquee> Hey </marquee>')
}

const server=http.createServer(handle)

server.listen(1400);

//Custom Web Server