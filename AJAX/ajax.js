var XHR=new XMLHttpRequest;

XHR.onreadystatechange=function()
{
    if(XHR.readyState==4)
    {
    console.log("Ready state is"+XHR.readyState);
    console.log(XHR.responseText)
    }
    if(XHR.readyState==200)
    {
        console.log(XHR.responseText)
    }
}


XHR.open("GET","https://api.github.com/zen")
XHR.send();


//UNSENT-->OPENED-(open)--->HEADERS_RECEIVED-(send)->LOADING--->DONE