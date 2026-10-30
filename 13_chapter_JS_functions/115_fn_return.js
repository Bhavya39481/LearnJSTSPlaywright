function getStatusCode(code)
{
    if(code>=200 && code<300)
    {
        return "success";
    }
    else if(code>=400 && code<500)
    {
        return "client error";
    }
    else if(code >=500)
    {
        return "server error"
    }
    else{
        return "unknown";
    }
}

console.log(getStatusCode(202));

let result =[100, 200, 300];
console.log(getStatusCode(...result));
